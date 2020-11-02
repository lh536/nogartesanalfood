# Plantilla Básica de TailwindCSS v1.9.5

**Es altamente recomendado leer este documento en su totalidad para evitar inconvenientes**



##### Descripción



Este repositorio contiene un plantilla con la configuración básica para desarrollar una página web empleando **TailwindCSS**.

---

##### Enlaces



[TailwindCSS](https://tailwindcss.com/)

---

##### Comandos



``npm install``

Instala todas las dependencias necesarias para iniciar. 



``npm run build``

Compila nuevamente el archivo **tailwind.css** para que, en caso que se hayan realizado cambios estos se vean reflejados al renderizar el **index.html**.



``npx tailwindcss build ./src/css/tailwind.css -o ./build/css/main.css``

Permite modificar el nombre del directorio o del archivo _**.css**_ de salida.

---

##### Notas

Recuerde que hay que retirar/comentar los parámetros de **purge** en _**tailwind.config.js**_ en caso que quiera realizar modificaciones consecutivas para optimizar el tiempo de desarrollo.