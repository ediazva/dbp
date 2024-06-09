function visibility_response(status) {
  const response = document.getElementById("response-div");
  if(status)
    response.classList.remove("visually-hidden");
  else
    response.classList.add("visually-hidden");
}

function calculate_age(birthday) {
  const birthdayDate = new Date(birthday);
  const now = new Date();
  const age = now.getFullYear() - birthdayDate.getFullYear();

  return age - (now.getMonth() < birthdayDate.getMonth() && now.getDate() < birthdayDate.getDate());
}

function error(msg) {
  document.getElementById("toast-text").textContent = msg;
  const toast = bootstrap.Toast.getOrCreateInstance(document.getElementById("error-toast"));
  toast.show();
}

function identity_if_number(str) {
  return str.search("^[0-9]+$") == -1 ? null : str;
}

function process_data(self) {
  const inputs = Array.from(self.children).filter(x => x.nodeName == "DIV").map(x => x.firstElementChild.value);
  const outputDiv = document.getElementById("response-div");
  const outputs = Array.from(outputDiv.children).map(x => x.lastElementChild);
  outputs[0].textContent = inputs[0] + " " + inputs[1] + " " + inputs[2];
  
  let dni = identity_if_number(inputs[3]);
  if(!dni || dni.length != 8) {
    error("Ingrese un formato válido de DNI!");
    visibility_response(false);
    return false;
  } else
    outputs[1].textContent = dni.slice(-1);

  outputs[2].textContent = calculate_age(inputs[4]);
  visibility_response(true);

  return false;
}