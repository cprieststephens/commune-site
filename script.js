// To show dropdown menu when hamburger menu is clicked
let navMenu = document.getElementById("dropdown");
let navToggle = document.getElementById("hamburger");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// Waitlist form validation
let submitEmail = document.getElementById("email");
let emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let validationMessage = document.getElementById("validation_message");

function emailValidation() {
  if (submitEmail.value.match(emailFormat)) {
    validationMessage.innerText = "Thank you! We'll add you to the list.";
    validationMessage.style.color = "green";
    document.form1.text1.focus();
    return true;
  } else if (submitEmail.value == "") {
    validationMessage.innerText = "Please enter your email address.";
    validationMessage.style.color = "red";
  } else {
    validationMessage.innerText = "Please enter a valid email address.";
    validationMessage.style.color = "red";
    document.form1.text1.focus();
    return false;
  }
}
