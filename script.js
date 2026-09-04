
const year = new Date().getFullYear();
document.querySelectorAll("[data-year]").forEach(x => x.textContent = year);
const links = document.querySelectorAll(".nav-links a, .back");
links.forEach(a => a.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"})));
