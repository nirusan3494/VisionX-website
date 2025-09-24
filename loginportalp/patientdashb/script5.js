document.addEventListener("DOMContentLoaded", () => {
   
  const toggleBtn = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');        
    mainContent.classList.toggle('shifted');   
  });

   
  const menuItems = document.querySelectorAll(".sidebar .menu li a");
  const dashboardSection = document.getElementById("dashboard");
  const appointmentsSection = document.getElementById("appointments");

  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault(); 

       
      menuItems.forEach(i => i.parentElement.classList.remove("active"));
      item.parentElement.classList.add("active");

       
      const target = item.getAttribute("href").substring(1);
      if (target === "dashboard") {
        dashboardSection.style.display = "block";
        appointmentsSection.style.display = "none";
      } else if (target === "appointments") {
        dashboardSection.style.display = "none";
        appointmentsSection.style.display = "block";
      }
    });
  });

   
  const checkerBtn = document.querySelector(".checker-btn");
  if (checkerBtn) {
    checkerBtn.addEventListener("click", () => {
      alert("Symptom Checker will open here (demo).");
    });
  }

   
  dashboardSection.style.display = "block";
  appointmentsSection.style.display = "none";
});
