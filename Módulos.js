/* CommonJS */

//--------------------------------------------------------------------------------------
/* ES Moules */
// Módulos.js
// Función para cepillar los dientes
function cepillarDientes() {
    console.log("¡Cepillando los dientes!");  }
  
  // Función para bañarse
  function banarse() {
    console.log("Tomando una ducha refrescante.");  }
  
  // Función para lavar las manos
  function lavarManos() {
    console.log("Lavando las manos con agua y jabón.");  }
  
  // Función para vestirse
  function vestirse() {
    console.log("Seleccionando la ropa del día.");  }
  
  // Exportamos las funciones
  module.exports = {
    cepillarDientes,
    banarse,
    lavarManos,
    vestirse};
  

// Ejecutamos algunas acciones cotidianas
cepillarDientes();
banarse();
lavarManos();
vestirse();