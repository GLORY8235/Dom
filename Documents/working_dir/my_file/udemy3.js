alert("yes;'")

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p1Button');
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const winingSlected = document.querySelector('#playTO')

let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function (){
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winingScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;

    }

})

winingSlected.addEventListener('change', function (){

})

p2Button.addEventListener('click', function (){
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winingScore) {
            isGameOver =true;
    
        }
        p2Display.textContent = p2Score;

    }
})