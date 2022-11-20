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

// To change the submit button text colour on mouseover
let submitButton = document.getElementById("submit");
submitButton.addEventListener("mouseenter", function (event) {
  submitButton.style.color = "#cca8e9";
});
submitButton.addEventListener("mouseleave", function (event) {
  submitButton.style.color = "white";
});

//To change the cursor to a pointer on submit button mouseover
submitButton.addEventListener("mouseenter", function (event) {
  submitButton.style.cursor = "pointer";
});
submitButton.addEventListener("mouseleave", function (event) {
  submitButton.style.cursor = "cursor";
});

//To change the cursor to a pointer on hamburger menu mouseover
let hamburgerMenu = document.getElementById("hamburger");
hamburgerMenu.addEventListener("mouseenter", function (event) {
  hamburgerMenu.style.cursor = "pointer";
});
hamburgerMenu.addEventListener("mouseleave", function (event) {
  hamburgerMenu.style.cursor = "cursor";
});
