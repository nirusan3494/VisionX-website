 
document.querySelector('.signup-form').addEventListener('submit', function(e) {
  e.preventDefault();  
  alert('Doctor signup form submitted!');
});
 
const doctorEmail = "doctor@example.com";
const doctorPassword = "Doctor123";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".signup-form");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === doctorEmail && password === doctorPassword) {
       
      window.location.href = "index4.html";
    } else {
      alert("Invalid credentials!");
    }
  });
});
