document.getElementById("asignarClaseForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const horario = document.getElementById("horario").value;
  const sede = document.getElementById("sede").value;

  if (!horario || !sede) {
    alert("Por favor complete todos los campos");
    return;
  }

  const asignacion = {
    horario,
    sede,
    fechaAsignacion: new Date().toISOString(),
    estado: "activa"
  };

  const asignaciones = JSON.parse(localStorage.getItem("asignaciones") || "[]");
  asignaciones.push(asignacion);
  localStorage.setItem("asignaciones", JSON.stringify(asignaciones));

  alert("Clase y sede asignadas correctamente");
  
  document.getElementById("asignarClaseForm").reset();
});

// Funcionalidad del calendario
document.addEventListener("DOMContentLoaded", function() {
  const calendarDays = document.querySelectorAll(".calendar-day:not(.header)");
  
  calendarDays.forEach(day => {
    day.addEventListener("click", function() {
      calendarDays.forEach(d => d.classList.remove("selected"));
      
      if (this.textContent.trim()) {
        this.classList.add("selected");
        console.log("Día seleccionado: " + this.textContent);
      }
    });
  });
});

// Botones de acción
document.querySelectorAll(".btn-secondary")[0].addEventListener("click", function() {
  const horario = document.getElementById("horario").value;
  const sede = document.getElementById("sede").value;

  if (!horario || !sede) {
    alert("Por favor complete todos los campos antes de guardar");
    return;
  }

  const asignacion = {
    horario,
    sede,
    fechaAsignacion: new Date().toISOString(),
    estado: "activa"
  };

  const asignaciones = JSON.parse(localStorage.getItem("asignaciones") || "[]");
  asignaciones.push(asignacion);
  localStorage.setItem("asignaciones", JSON.stringify(asignaciones));

  alert("Datos guardados correctamente");
});

document.querySelectorAll(".btn-primary")[0].addEventListener("click", function() {
  if (confirm("¿Desea volver atrás? Los cambios no guardados se perderán.")) {
    window.history.back();
  }
});