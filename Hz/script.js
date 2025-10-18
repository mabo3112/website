const modalBtn = document.querySelector(".modal-button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const heartContainer = document.querySelector(".heart-container");

modalBtn.addEventListener("click", function(e) {
    modal.classList.remove("active");
    modalOverlay.classList.remove("active");
    startHearts();
}) 

const heartCreate = () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 98 + "vw";
    heart.style.animationDuration = Math.random() *2 + 3+"s";
    heartContainer.appendChild(heart);

    setTimeout(()=> {
        heart.remove();
    }, 5000)
}

const startHearts = () => {
    setInterval(heartCreate, 300);
}
