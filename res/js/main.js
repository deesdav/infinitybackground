const background = document.getElementById("background");

const randomNumber = (maximum, minimum) => {
    const myNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return myNum;
} 
console.log(randomNumber(0, 255));

const changeColor = () => {
    const r = randomNumber(0,255);
    const g = randomNumber(0,255);
    const b = randomNumber(0,255);
    background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

setInterval(() => {
    changeColor();
}, 1000);