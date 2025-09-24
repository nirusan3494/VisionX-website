 
document.querySelectorAll(".calendar td").forEach(cell => {
  cell.addEventListener("click", () => {
    document.querySelectorAll(".calendar td").forEach(c => c.classList.remove("active"));
    cell.classList.add("active");
  });
});
