# Notas por Cédula · Generador para docentes

**Abrir la herramienta:** https://gaopyme-prog.github.io/generador-notas/

## ¿Qué es?
Una herramienta para docentes que convierte un **Excel de notas** y, si se quiere, el **PDF del acta de UNIPAZ** en una **página web de consulta**: cada estudiante escribe su número de cédula y ve **únicamente su propio resultado**. Con el acta, la página también le avisa si **debe habilitar** y le muestra la ruta de habilitación.

## ¿Para qué sirve? (finalidad)
Publicar las notas de un curso **de forma rápida y privada**, sin exponer las calificaciones de todo el grupo en una lista pública ni enviar mensajes uno por uno. El docente sube su archivo, genera la página y la comparte en el aula virtual (AVAPAZ) o en el grupo del curso. Sirve para cualquier asignatura y cualquier docente.

**Dirigido a:** docentes de cualquier programa o institución.

## Cómo protege los datos
- El archivo de notas **no sale del computador** del docente: se lee dentro del navegador.
- **Cada fila va cifrada:** la cédula de cada estudiante es la llave que abre solo su nota.
- Opcionalmente se agrega una **clave del curso**, de modo que se necesitan cédula y clave.
- Cada estudiante ve solo su resultado; no hay comparación con el grupo ni nombres de compañeros.

## ¿Cómo se usa? (6 pasos en pantalla)
1. **Suba su Excel o el acta en PDF** (.xlsx, .xls, .csv o PDF del acta de UNIPAZ). Puede **probar con un ejemplo**.
2. **Elija qué se muestra:** hoja, fila de títulos, columna de la cédula, columna del nombre (opcional), columnas visibles y columna destacada (por ejemplo, la definitiva).
3. **Acta en PDF y habilitación (opcional):** suba el acta en PDF. La **nota definitiva se toma del acta** (la cédula es la llave) y aparece de primera. Quien tenga **menos de la nota mínima** (por defecto 3,0) ve el aviso *Debes presentar habilitación* y una imagen con la ruta: calendario, valor a pagar y pasos. Quien aprueba ve que no necesita habilitar. Sobre las notas del Excel aparece un encabezado editable (por ejemplo, «Detalle del tercer corte»). Se pueden editar la nota mínima, el calendario, el valor, los pasos y el mensaje final. La herramienta avisa si hay estudiantes que están en el Excel pero no en el acta, o al revés, y si alguna nota del acta no es numérica (por ejemplo NP): a esos no se les muestra el aviso.
4. **Observaciones del docente (opcional):** suba un Word con un título por estudiante y una tabla Ítem / Nota / Razón; cada estudiante verá su retroalimentación junto a sus notas.
5. **Personalice la página:** título, subtítulo, docente, clave adicional, mensaje para los estudiantes, decimales y separador decimal.
6. **Genere la página:** descargue el archivo `.html` (o copie el código) y **pruébela** antes de compartirla.

## Cómo publicarla
1. Cree un repositorio público en GitHub y suba el archivo generado con el nombre `index.html`.
2. Active *Settings* › *Pages* (rama `main`, carpeta raíz).
3. Pegue el enlace en el aula virtual o en el grupo del curso. (Google Drive no sirve: no muestra páginas HTML.)
4. Cuando cambien las notas, genere la página de nuevo y reemplace el archivo publicado.

Ejemplo publicado con esta herramienta: https://gaopyme-prog.github.io/notas-especializacion/

## Archivos del repositorio
- `index.html`: el generador.

## Créditos
Idea y dirección: **Omar Guerrero Avilés**, docente de UNIPAZ, Barrancabermeja. Desarrollado con apoyo de inteligencia artificial.
Contacto: omar.guerreroav@unipaz.edu.co
