// signupdoctor.js

// Example: simple alert on form submit
document.querySelector('.signup-form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent actual submission for demo
  alert('Doctor signup form submitted!');
});
// Hardcoded doctor credentials
const doctorEmail = "doctor@example.com";
const doctorPassword = "Doctor123";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".signup-form");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual form submission

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === doctorEmail && password === doctorPassword) {
      // Correct login → go to dashboard
      window.location.href = "index4.html";
    } else {
      alert("Invalid credentials!");
    }
  });
});
