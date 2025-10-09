document.addEventListener("DOMContentLoaded", function() {
  cargarProfesorSeleccionado();
  
  // Búsqueda
  document.querySelector(".btn-search-top").addEventListener("click", buscarProfesor);
  document.getElementById("searchProfesortop").addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
      buscarProfesor();
    }
  });
});

function cargarProfesorSeleccionado() {
  const personal = JSON.parse(localStorage.getItem("personal") || "[]");
  const profesores = personal.filter(p => p.cargo === "docente");
  
  if (profesores.length === 0) {
    return;
  }
  
  // Mostrar el primer profesor o el seleccionado
  const profesorSeleccionado = profesores[0];
  
  const teacherDetails = document.querySelector(".teacher-details");
  teacherDetails.innerHTML = `
    <p><strong>Nombre Docente:</strong> ${profesorSeleccionado.nombreCompleto || profesorSeleccionado.nombres + ' ' + profesorSeleccionado.apellidos}</p>
    <p><strong>Documento:</strong> ${profesorSeleccionado.documento || profesorSeleccionado.identificacion}</p>
    <p><strong>Celular:</strong> ${profesorSeleccionado.celular || profesorSeleccionado.telefono}</p>
    <p><strong>Sede asignada:</strong> ${profesorSeleccionado.sede || 'No asignada'}</p>
    <p><strong>Estado:</strong> ${profesorSeleccionado.estado === 'activo' ? 'Activo' : 'Inactivo'}</p>
  `;
}

function buscarProfesor() {
  const searchTerm = document.getElementById("searchProfesortop").value.toLowerCase();
  
  if (!searchTerm) {
    alert("Por favor ingrese un término de búsqueda");
    return;
  }
  
  const personal = JSON.parse(localStorage.getItem("personal") || "[]");
  const profesores = personal.filter(p => p.cargo === "docente");
  
  const encontrado = profesores.find(p => {
    const nombreCompleto = (p.nombreCompleto || p.nombres + ' ' + p.apellidos).toLowerCase();
    const documento = (p.documento || p.identificacion).toLowerCase();
    return nombreCompleto.includes(searchTerm) || documento.includes(searchTerm);
  });
  
  if (encontrado) {
    const teacherDetails = document.querySelector(".teacher-details");
    teacherDetails.innerHTML = `
      <p><strong>Nombre Docente:</strong> ${encontrado.nombreCompleto || encontrado.nombres + ' ' + encontrado.apellidos}</p>
      <p><strong>Documento:</strong> ${encontrado.documento || encontrado.identificacion}</p>
      <p><strong>Celular:</strong> ${encontrado.celular || encontrado.telefono}</p>
      <p><strong>Sede asignada:</strong> ${encontrado.sede || 'No asignada'}</p>
      <p><strong>Estado:</strong> ${encontrado.estado === 'activo' ? 'Activo' : 'Inactivo'}</p>
    `;
    alert("Profesor encontrado");
  } else {
    alert("No se encontró ningún profesor con ese criterio de búsqueda");
  }
}

// Navegación del menú lateral
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", function(e) {
    console.log("Navegando a: " + this.href);
  });
});