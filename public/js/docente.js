document.addEventListener("DOMContentLoaded", () => {
  // 1. Mostrar el nombre del docente desde localStorage
  const docente = localStorage.getItem("docenteNombre") || "Docente";
  const tituloBienvenida = document.querySelector("header.docente-header h2");
  if (tituloBienvenida) {
    tituloBienvenida.textContent = `Bienvenido, ${docente}`;
  }

  // 2. Confirmación al cerrar sesión desde el último enlace del menú
  const cerrarSesionLink = document.querySelector('.nav-links li:last-child a');
  if (cerrarSesionLink) {
    cerrarSesionLink.addEventListener("click", (e) => {
      e.preventDefault();
      const confirmacion = confirm("¿Seguro que deseas cerrar sesión?");
      if (confirmacion) {
        // Borra el nombre almacenado antes de salir
        localStorage.removeItem("docenteNombre");
        window.location.href = "index.html";
      }
    });
  }
});
