// ================================welcomepage=======================
function animateButton() {
    const button = document.getElementById("goButton");
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    button.style.transition = "all 15s";
    // button.style.fontSize = "12px";
    button.innerHTML = "ITCHROOTS"
    button.style.transform = `scale(${Math.max(windowWidth, windowHeight)})`;

    setTimeout(() => {
        window.location.href = "templates/homepage.html"; // Change this to your home page URL
    }, 1000);
}
