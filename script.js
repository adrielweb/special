
// Perbaikan script.js
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

noBtn.addEventListener("mouseover", function () {
    const maxX = window.innerWidth - this.offsetWidth - 20;
    const maxY = window.innerHeight - this.offsetHeight - 20;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

yesBtn.addEventListener("click", function () {
    response.innerHTML = `
        <div class='response-content'>
            <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXBidGl4NDN2c2YybHRnOWNsd3ljZ296MmRsaHY0YW95ZnA5MGhrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wPnbkEcr2tXiTN0Lmq/giphy.gif' 
                alt='Happy Valentine Gif' class='response-gif'>
            <p class='response-text'>Yay! ❤️ See you on Valentine's Day! Einjiiiii my hunn❤️</p>
        </div>`;
});

// Perbaikan style.css
const style = document.createElement('style');
style.innerHTML = `
    .response-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
    }
    .response-gif {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }
    .response-text {
        font-size: 18px;
        font-weight: bold;
        color: #d6336c;
    }
    #buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;
    }
`;
document.head.appendChild(style);
