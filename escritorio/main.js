const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');

function crearVentana() {
  const win = new BrowserWindow({
    width: 1100, height: 850, autoHideMenuBar: true, title: 'Notas por Cédula',
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
}

ipcMain.handle('publicar', async (_e, slug, html) => {
  const limpio = String(slug || 'consulta').replace(/[^a-z0-9-]/gi, '').slice(0, 60) || 'consulta';
  const carpeta = path.join(app.getPath('documents'), 'Notas por Cédula', limpio);
  fs.mkdirSync(carpeta, { recursive: true });
  fs.writeFileSync(path.join(carpeta, 'index.html'), String(html), 'utf8');
  await shell.openPath(carpeta);
  await shell.openExternal('https://app.netlify.com/drop');
  return carpeta;
});

if (!app.requestSingleInstanceLock()) app.quit();
app.whenReady().then(crearVentana);
app.on('window-all-closed', () => app.quit());
