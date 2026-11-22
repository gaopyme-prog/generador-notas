const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('npcDesktop', {
  publicar: (slug, html) => ipcRenderer.invoke('publicar', slug, html)
});
