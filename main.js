const Btn = document.querySelector('.colorBtn');

const bodyBcg = document.querySelector('body');

const colors = ["yellow", "red", "green", "#E91E63", "#9C27B0", "#2196F3", "#FF9800", "#795548", "#BDC581", "#FD7272", "#1B9CFC", "#2C3A47", "#55E6C1"];


Btn.addEventListener("click", changeColor);


function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    document.getElementById("changeOnClick").style.backgroundColor = colors[random];
}