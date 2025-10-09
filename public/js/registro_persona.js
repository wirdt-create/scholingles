document.getElementById("registroPersonalForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombreCompleto = document.getElementById("nombreCompleto").value;
  const tipoDocumento = document.getElementById("tipoDocumento").value;
  const documento = document.getElementById("documento").value;
  const celular = document.getElementById("celular").value;
  const agregarFoto = document.getElementById("agregarFoto").files[0];

  // Validar que no exista la identificación
  const personal = JSON.parse(localStorage.getItem("personal") || "[]");
  const existe = personal.find(p => p.documento === documento);
  
  if (existe) {
    alert("Ya existe un registro con este documento");
    return;
  }

  // Crear objeto de personal
  const nuevoPersonal = {
    nombreCompleto,
    tipoDocumento,
    documento,
    celular,
    fechaRegistro: new Date().toISOString(),
    estado: "activo",
    cargo: "docente"
  };

  // Si hay foto, guardar referencia
  if (agregarFoto) {
    nuevoPersonal.fotoNombre = agregarFoto.name;
  }

  // Guardar en localStorage
  personal.push(nuevoPersonal);
  localStorage.setItem("personal", JSON.stringify(personal));

  alert("Docente registrado exitosamente");
  
  // Limpiar formulario
  document.getElementById("registroPersonalForm").reset();
});

// Botón cancelar
document.querySelector(".btn-secondary").addEventListener("click", function() {
  if (confirm("¿Está seguro de cancelar? Se perderán los datos ingresados.")) {
    window.history.back();
  }
});