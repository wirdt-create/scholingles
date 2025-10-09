document.addEventListener("DOMContentLoaded", () => {
  // 1. Mostrar el nombre del docente desde localStorage
  const docente = localStorage.getItem("docenteNombre") || "Docente";
  const tituloBienvenida = document.querySelector(".hero h2");
  if (tituloBienvenida) {
    tituloBienvenida.textContent = `Bienvenido, ${docente}`;
  }

  // 2. Confirmación al cerrar sesión desde el menú
  const logoutLink = document.querySelector('.nav-links li:last-child a');
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("¿Seguro que deseas cerrar sesión?")) {
        window.location.href = "index.html";
      }
    });
  }

  // 3. Botón de cerrar sesión adicional (por ID)
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", cerrarSesion);
  }
});

// Función para cerrar sesión (puedes reutilizarla en varios lugares)
function cerrarSesion() {
  alert("👋 Sesión cerrada correctamente");
  window.location.href = "login.html";
}
