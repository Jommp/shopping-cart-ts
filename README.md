# Proyecto 01: Carrito de Compras 🛒

Este es el primer proyecto de mi portafolio de **React**, desarrollado como parte del curso de Udemy *Aprende React desde cero: Hooks y State hasta TypeScript...*. Mi objetivo principal es construir un portafolio de proyectos sólidos en mi cuenta de GitHub para demostrar mis habilidades como desarrollador de React.

Este proyecto es un **carrito de compras completamente funcional** que permite a los usuarios gestionar productos, actualizar cantidades y calcular el total de la compra.

---

### **Características del Proyecto**

* **Listado de productos dinámico**: Muestra los productos disponibles para agregar al carrito.
* **Gestión del carrito**: Permite añadir, eliminar y ajustar la cantidad de productos en el carrito.
* **Cálculo total de la compra**: Muestra el subtotal, impuestos y el total final en tiempo real.

---

### **Despliegue en Vivo**

Puedes ver el proyecto en funcionamiento aquí: [**Enlace a Netlify**](https://ejemplo-carrito-compras.netlify.app/)

---

### **Tecnologías y Conceptos Clave**

* **React**: Biblioteca principal utilizada para la interfaz de usuario.
* **TypeScript**: Lenguaje utilizado para garantizar el tipado estricto y la consistencia del código.
* **Hooks**: Implementación de `useState` para manejar el estado local de la aplicación.
* **Gestión de eventos**: Manejo de eventos de clic y cambio para interactuar con los componentes.
* **Manejo de estados complejos**: Uso de objetos y arreglos para gestionar los ítems del carrito de forma eficiente.
* **Renderizado condicional**: Mostrar o esconder elementos de la UI según el estado del carrito.

---

### **Mejoras y Valor Añadido**

Para solidificar mi aprendizaje y darle un toque personal al proyecto, implementé las siguientes mejoras:

* **Migración a TypeScript**: Originalmente desarrollado con JavaScript, migré el proyecto a **TypeScript** para aprovechar el tipado estricto y mejorar la calidad del código. Esta refactorización demuestra mi habilidad para trabajar con bases de código tipadas y prevenir errores comunes en tiempo de desarrollo.
* **Refactorización a Custom Hook**: Migré la lógica del carrito a un **custom hook (`useCart.ts`)** para encapsular la funcionalidad, mejorar la reutilización del código y mantener los componentes limpios y enfocados en la UI.
* **Diseño Responsivo**: Apliqué estilos **responsivos** para garantizar una experiencia de usuario fluida en dispositivos móviles y de escritorio.
* **Animaciones y transiciones**: Añadí animaciones sutiles al agregar y eliminar productos del carrito para una experiencia más interactiva y visualmente atractiva.

---

### **Cómo ejecutar el proyecto localmente**

Si deseas clonar y probar este proyecto en tu entorno local, sigue estos pasos.

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd nombre-del-repo
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    # o, si prefieres usar Bun:
    bun install
    ```
4.  Inicia la aplicación en modo de desarrollo:
    ```bash
    npm run dev
    # o, si prefieres usar Bun:
    bun run dev
    ```

El proyecto se abrirá automáticamente en tu navegador en la URL `http://localhost:3000`.