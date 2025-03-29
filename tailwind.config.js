// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,js}", // Asegúrate de incluir las rutas correctas
    ],
    theme: {
      extend: {
        fontFamily: {
          consola: ['Consolas', 'monospace'], // Añadir Consolas como fuente personalizada
        },
      },
    },
    plugins: [],
  }
  