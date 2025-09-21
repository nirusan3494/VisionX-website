// signupdoctor.js

// Example: simple alert on form submit
document.querySelector('.signup-form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent actual submission for demo
  alert('Doctor signup form submitted!');
});
