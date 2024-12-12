
// Smooth scroll to the next section
document.getElementById("scrollIcon").addEventListener("click", function () {
    const nextSection = document.getElementById("About");
    nextSection.scrollIntoView({ behavior: "smooth" });
});

//NAVBAR ADJUSTMENT TO SCREEN SIZE
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const body = document.body;

    const adjustPadding = () => {
        body.style.paddingTop = `${header.offsetHeight}px`;
    };

    adjustPadding();
    window.addEventListener("resize", adjustPadding);
});

