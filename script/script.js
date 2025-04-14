const emailInput = document.getElementById('footerEmailInput');
emailInput.addEventListener("input", function() {
  const value = emailInput.value.trim();

  if(value.endsWith("@gmail.com") && value.length > "@gmail.com".length) {
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
  } else {
    emailInput.classList.remove('valid');
    emailInput.classList.add('invalid');
  }
});

emailInput.addEventListener("blur", function () {
});