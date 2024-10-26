//change mode 
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-Mode");
});
document.body.classList.add("dark-Mode");

// move the  word
const text = "Nada Gibreel";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-effect").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

//Vist the Site:
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);

document.getElementById("visit-count").textContent = "Vist the Site: " + visitCount;





