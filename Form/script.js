console.log("Hi there! Just a little test!");

document.querySelector("strong").style.color = "hotpink";

function celebrate() {
  let cheers = document.querySelector("#congrats");
  cheers.style.color = "gold";
  cheers.style.fontSize = "larger";
  console.log("cheers ok");
}

function beware(){
    alert('Make sure you at least filled out the Name and Email fields before submitting!');
}

// Prints a console log if the #name and #email fieldsets have been completed
function checkName() {
  let person = document.querySelector("#name");
  if (person && person.value !== " ") {
    console.log("Name field has been completed.");
  }
}

function checkEmail() {
  let contact = document.querySelector("#email");
  if (contact && contact.value !== " ") {
    console.log("Email field has been completed.");
  }
}

document.querySelector('#name').addEventListener('input', checkName);
document.querySelector('#email').addEventListener('input', checkEmail);

// Displays the Web Dev course fieldset if the user chooses the Web Dev option in the course checkbox
document.getElementById("webdev").addEventListener("change", function () {
  var fieldset = document.getElementById("webdevelopment");
  if (this.checked) {
    fieldset.style.display = "block";
  } else {
    fieldset.style.display = "none";
  }
  console.log("conditional ok");
});

