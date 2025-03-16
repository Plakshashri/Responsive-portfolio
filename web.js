document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".opensource-card");
    const dots = document.querySelectorAll(".dot");

    cards.forEach((card, index) => {
        card.addEventListener("mouseover", () => {
            dots.forEach(dot => dot.classList.remove("active")); // Remove active from all dots
            dots[index].classList.add("active"); // Highlight the corresponding dot
        });

        card.addEventListener("mouseleave", () => {
            dots.forEach(dot => dot.classList.remove("active")); // Remove all highlights
        });
    });
});
