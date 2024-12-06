# Frontend de Aplicación de Tareas

Este proyecto implementa un frontend para gestionar tareas utilizando React, Vite y Tailwind CSS. Incluye funcionalidades como una lista de tareas interactiva y un diseño con soporte para modo oscuro.

## Tecnologías Utilizadas
- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta para desarrollo rápido de aplicaciones.
- **Tailwind CSS**: Framework de estilos CSS.
- **Fetch API**: Para comunicación con el backend.

## Requisitos Previos
- Node.js 16+
- npm como gestor de paquetes

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/AlexGrim12/FrontTodoApp
   cd FrontTodoApp
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**
   ```bash
   npm run dev
   ```
   Por defecto, la aplicación estará disponible en `http://localhost:5173`.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura básica:

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskList.js
│   │   ├── TaskForm.js
│   │   └── TaskItem.js
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

### Descripción de Archivos

1. **App.js**: Componente principal que maneja la estructura base de la aplicación y la lógica de modo oscuro.
2. **TaskList.js**: Componente que muestra la lista de tareas obtenidas del backend.
3. **TaskForm.js**: Componente para agregar nuevas tareas.
4. **TaskItem.js**: Componente individual que representa una tarea.

## Funcionalidades Principales

1. **Modo Oscuro**
   - Puede activarse o desactivarse con un botón.

2. **Lista de Tareas**
   - Obtiene y muestra las tareas desde el backend.

3. **Agregar Nuevas Tareas**
   - A través de un formulario se pueden agregar tareas al backend.

4. **Gestión de Tareas**
   - Cada tarea puede actualizarse (marcar como completada) o eliminarse.

## Construcción para Producción

1. **Construir la aplicación**
   ```bash
   npm run build
   ```
2. Los archivos de producción estarán en la carpeta `dist/`.

## Notas
- El frontend interactúa con la API del backend, que debe estar corriendo para la funcionalidad completa.
- Las rutas de la API deben configurarse en `TaskList.js` y `TaskForm.js` para asegurar la conectividad.
