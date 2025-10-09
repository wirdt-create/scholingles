document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // 👑 Admin
  if (username === "admin" && password === "1234") {
    alert("✅ Bienvenido Administrador");
    window.location.href = "admin.html";
    return;
  }

  // 👨‍🏫 Docente
  if (username === "docente" && password === "12345") {
    alert("✅ Bienvenido Docente");
    window.location.href = "docente.html";
    return;
  }

  // 🔐 Usuario registrado en localStorage
  const userData = localStorage.getItem("user_" + username);
  if (!userData) {
    alert("❌ Usuario no encontrado");
    return;
  }

  const user = JSON.parse(userData);

  if (user.password === password) {
    alert("✅ Bienvenido " + user.fullname);
    window.location.href = "index.html"; // usuarios normales
  } else {
    alert("❌ Contraseña incorrecta");
  }
});