function checkPassword() {
    const correctPassword = "iceicecold";  // Replace with your actual password
    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";

        // Fix for music autoplay
        const music = document.getElementById("bg-music");
        music.muted = false;  // Unmute music
        music.play();  // Start playing
    } else {
        alert("Galat password! Dubara try kar.");
    }
}

// Ensure images fade in properly when scrolling
function checkVisibility() {
    const elements = document.querySelectorAll(".memory");

    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});
