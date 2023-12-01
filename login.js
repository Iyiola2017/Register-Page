document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateForm()) {
    alert('Form submitted successfully!');
  }
});

function validateForm() {
  let isValid = true;

  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (fname === '') {
    isValid = false;
    document.getElementById('firstnameError').innerText = 'Name is required.';
  } else {
    document.getElementById('firstnameError').innerText = '';
  }

  if (lname === '') {
    isValid = false;
    document.getElementById('lastnameError').innerText = 'Name is required.';
  } else {
    document.getElementById('lastnameError').innerText = '';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    document.getElementById('emailError').innerText = 'Invalid email address.';
  } else {
    document.getElementById('emailError').innerText = '';
  }

  if (password.length < 6) {
    isValid = false;
    document.getElementById('passwordError').innerText = 'Password must be at least 6 characters.';
  } else {
    document.getElementById('passwordError').innerText = '';
  }

  return isValid;
}
