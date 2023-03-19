# Tutorial: Armado y Deploy en Heroku MARZO 2023

## ARMADO

<https://www.youtube.com/watch?v=w3vs4a03y3I>

---

BUILD

1) En el cliente haces npm run build, lo cual crea una carpeta "build" (o lo actualiza si ya habias creado la carpeta).
2) Desde fuera de VSCode, copia los archivos de esa carpeta y llevalos a la carpeta server/public y pegalos ahi.
3) De esta manera al inicializar el server, te va a mostrar las cosas de react.
4) Siempre que hayas agregado cosas hay que hacer estos pasos.

---
<https://youtu.be/Q0wVXS-V-Uw?t=774>

DEPLOY A HEROKU

1) .gitignore a nivel raíz de la carpeta server para no enviar /node_modules y cualquier otro archivo confidencial.
2) Te logueas desde el CLI de Heroku con el siguiente comando: heroku login
3) Creas el proyecto con: heroku create nombre-del-proyecto
4) Hacer un repositorio nuevo en git (init/add/commit)
5) Busca tu proyecto recién creado en Heroku, entra y busca la sección de "Create a new Git repository". La linea que nos importa en este punto es la que seguro dice algo parecido a "heroku git:remote -a nombre-del-proyecto y usala
6) Luego de creado, pusheamos los cambios con: git push heroku master
7) El CLI debería decirte la URL de tu proyecto.

## ACTUALIZAR DEPLOY

1) Build de la app: "npm run build" del frontend
2) Copiar los archivos creados por el build en client/build
3) Borrar los archivos de server/public
4) Pegar los archivos copiados en server/public
5) Dentro de server, hacer add y commit de los cambios a git
6) Al hacer el push del commit, Heroku de manera automática debería tomar los cambios.
