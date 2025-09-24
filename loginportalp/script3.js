 
document.getElementById('patient-signup-form').addEventListener('submit', function(e){
  const name = document.getElementById('name').value.trim();
  if(name.length < 3){
    e.preventDefault();
    alert('Name must be at least 3 characters long!');
  }
});
