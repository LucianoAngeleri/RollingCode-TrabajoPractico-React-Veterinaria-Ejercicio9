# Trabajo Práctico de React
## Ejercicio 9 - Pacientes de Veterinaria
Este proyecto es una aplicación web desarrollada en **React** que permite registrar una cita en una veterinaria, borrar una cita y ver una lista de las citas que se almacenan en Local Storage.

## Autor

El proyecto fue creado por [César Luciano Angeleri](https://www.linkedin.com/in/cesar-luciano-angeleri/) como parte de un trabajo práctico de React para RollingCode School.

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías y herramientas:

- React
- JavaScript
- HTML
- CSS
- Bootstrap
- Node.js
- npm

## Instalación

Sigue los siguientes pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio en tu máquina local o descarga el archivo ZIP.
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```
    npm install
    ```

## Ejecución

Después de haber instalado las dependencias, sigue los siguientes pasos para ejecutar el proyecto:

1. En la misma terminal, ejecuta el siguiente comando para iniciar la aplicación:

    ```
    npm run dev
    ```

2. Abbre tu navegador web y ve a la dirección que aparece en la terminal, deberia ser algo como:
    ```
    http://localhost:5173/
    ```

## Funcionamiento de los componentes

### FormCitas.jsx

El componente `FormCitas` contiene el formulario para registrar una cita en la veterinaria. Al ingresar los datos requeridos (nombre de la mascota, nombre del dueño, fecha, hora y síntomas), se crea una nueva cita. Las citas se guardan en el localStorage y se muestran en el componente `ListaCitas`.

### ListaCitas.jsx

El componente `ListaCitas` muestra la lista de citas registradas en tarjetas individuales. Si no hay citas registradas, se muestra un mensaje indicando que no hay citas. Cada tarjeta de cita muestra la información de la mascota, el dueño, la fecha, la hora y los síntomas. También proporciona un botón para borrar la cita.

### CardCitas.jsx

El componente `CardCitas` muestra los detalles de una cita en una tarjeta individual. Recibe las propiedades de la mascota, el propietario, la fecha, la hora, los síntomas y la función `borrarCita` para eliminar la cita correspondiente. La tarjeta muestra la información en secciones y proporciona un botón de "Borrar" para eliminar la cita.