document.addEventListener("DOMContentLoaded", function() {
    const opcionContactos = document.getElementById("opcion-4");
    const integrantes = document.querySelector(".integrantes");
  
    opcionContactos.addEventListener("mouseover", function() {
      integrantes.style.display = "block";
    });
  
    opcionContactos.addEventListener("mouseout", function() {
      integrantes.style.display = "none";
    });
  });
  