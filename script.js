// Animación simple al cargar
document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.querySelector(".hero h1");
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        heroText.style.opacity = 1;
        heroText.style.transform = "translateY(0)";
        heroText.style.transition = "all 1s ease";
    }, 200);
});
