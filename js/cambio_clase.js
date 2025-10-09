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

document.getElementById("cambioClaseForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const sede = document.getElementById("sede").value;
  const diaSeleccionado = document.querySelector(".calendar-day.selected");

  if (!sede) {
    alert("Por favor seleccione una sede");
    return;
  }

  if (!diaSeleccionado) {
    alert("Por favor seleccione una fecha en el calendario");
    return;
  }

  const dia = diaSeleccionado.textContent;
  const mes = "Abril";
  const anio = "2025";
  const fechaCambio = `${dia} de ${mes} de ${anio}`;

  const cambio = {
    sede,
    fechaCambio,
    fechaRegistro: new Date().toISOString(),
    estado: "pendiente"
  };

  const cambios = JSON.parse(localStorage.getItem("cambiosClase") || "[]");
  cambios.push(cambio);
  localStorage.setItem("cambiosClase", JSON.stringify(cambios));

  alert(`Cambio de clase registrado correctamente\n\nSede: ${obtenerTextoSede(sede)}\nFecha: ${fechaCambio}`);
  
  document.getElementById("cambioClaseForm").reset();
  calendarDays.forEach(d => d.classList.remove("selected"));
  
  // Restaurar día 7 como seleccionado por defecto
  const dia7 = Array.from(calendarDays).find(d => d.textContent === "7");
  if (dia7) dia7.classList.add("selected");
});

function obtenerTextoSede(valor) {
  const sedes = {
    "sede1": "Sede Principal - Centro",
    "sede2": "Sede Norte - Laureles",
    "sede3": "Sede Sur - Envigado"
  };
  return sedes[valor] || valor;
}

// Botón Guardar
document.querySelectorAll(".btn-secondary")[0].addEventListener("click", function() {
  const sede = document.getElementById("sede").value;
  const diaSeleccionado = document.querySelector(".calendar-day.selected");

  if (!sede) {
    alert("Por favor seleccione una sede");
    return;
  }

  if (!diaSeleccionado) {
    alert("Por favor seleccione una fecha en el calendario");
    return;
  }

  const dia = diaSeleccionado.textContent;
  const mes = "Abril";
  const anio = "2025";
  const fechaCambio = `${dia} de ${mes} de ${anio}`;

  const cambio = {
    sede,
    fechaCambio,
    fechaRegistro: new Date().toISOString(),
    estado: "guardado"
  };

  const cambios = JSON.parse(localStorage.getItem("cambiosClase") || "[]");
  cambios.push(cambio);
  localStorage.setItem("cambiosClase", JSON.stringify(cambios));

  alert(`Datos guardados correctamente\n\nSede: ${obtenerTextoSede(sede)}\nFecha: ${fechaCambio}`);
});

// Botón Atrás
document.querySelectorAll(".btn-primary")[0].addEventListener("click", function() {
  if (confirm("¿Desea volver atrás? Los cambios no guardados se perderán.")) {
    window.history.back();
  }
});