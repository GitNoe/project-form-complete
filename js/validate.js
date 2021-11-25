// js simple de validacion de email - no personalizado

const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
});

// tendría que hacer algo parecido para los patterns de name y phone
const name = document.getElementById("name");

name.addEventListener("input", function (event) {
  if (name.validity.typeMismatch) {
    name.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    name.setCustomValidity("");
  }
});