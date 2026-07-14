// Animasi tombol saat halaman dimuat
window.addEventListener("load", () => {
    document.querySelector(".hero-text").style.opacity = "1";
    document.querySelector(".hero-text").style.transform = "translateY(0)";
});

// Efek muncul saat scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";
    observer.observe(card);
});