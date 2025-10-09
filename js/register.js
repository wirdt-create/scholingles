document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validaciones básicas
  if (password !== confirmPassword) {
    alert("❌ Las contraseñas no coinciden");
    return;
  }

  if (password.length < 6) {
    alert("❌ La contraseña debe tener al menos 6 caracteres");
    return;
  }

  // Guardar en localStorage (modo demo, sin backend)
  const userData = {
    fullname,
    email,
    username,
    password
  };

  localStorage.setItem("user_" + username, JSON.stringify(userData));

  alert("✅ Usuario registrado con éxito. Ahora puedes iniciar sesión.");
  window.location.href = "login.html";
});
