// let allImage = document.getElementsByTagName('img')
// for (let img of allImage) {
//     // console.log(img.src)
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }
const squareImages = document.getElementsByClassName('square');
for (let img of squareImages){
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'


}

const links = document.querySelectorAll('p a');
for (let link of links){
    console.log(link.href)
}

const allLink = document.querySelectorAll('a')
for (let link1 of allLink) {
    link1.innerText = 'I AMA LINK!!!!'
}

const allLinks = document.querySelectorAll('a');
for (let linka of allLinks) {
    linka.style.borderr = 'hsl(104, 72.90%, 40.60%)';
    linka.style.textDecorationColor = 'magenta';
    linka.style.textDecorationStyle = 'wavy';
    
}

// https://raw.githubusercontent.com/pokeApI/sprite/master/sprite/pokemon/1.png
// const container = document.querySelector('#container');
//    const baseURL = 'https://raw.githubusercontent.com/pokeApI/sprites/master/sprites/pokemon/' 
// for (let i = 1; i  <= 151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pekemon');
//     const label = document.createElement('span');
//     label.innerText = `#${1}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`


//     pokemon.appendChild(newImg) ;
//     pokemon.appendChild(label) ;
//     container.appendChild(pokemon) 



// }

const container = document.querySelector('#container');
   const baseURL = 'https://raw.githubusercontent.com/pokeApI/sprites/master/sprites/pokemon/' 
for (let i = 1; i  <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pekemon');
    const label = document.createElement('span');
    label.innerText = `#${1}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    pokemon.appendChild(newImg) ;
    pokemon.appendChild(label) ;
    container.appendChild(pokemon) 
    // vvvv.ad('click', function (){
    //     alert(vbnm)
    // })

    // is a method used to add a new child node to a 
    // parent node in the DOM (Document Object Model). It appends the 
    // specified node as the last child of a given parent element.

}

let buttonting = document.querySelector('.button');
buttonting.addEventListener('click', function (){
    document.body.style.backgroundColor = 'olive';
})



let button1 = document.querySelector('.buttons');
const h1 = document.querySelector('.welcome')
button1.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 255); // 256 to include 255
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    // Correcting the rgb format
    const newColor = `rgb(${r}, ${g}, ${b})`;
    
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    h1.style.color = makeRandomColor();

});


const  makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255); // 256 to include 255
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
        return`rgb(${r}, ${g}, ${b})`;
    
}
const buttons = document.querySelectorAll('.butoon12');
for (let button of buttons) {
    button.addEventListener('click', colorize) 
        // console.log("click")
        // this.style.backgroundColor = makeRandomColor();
        // this.style.color = makeRandomColor();
        // button.style.backgroundColor = makeRandomColor();
        // button.style.color = makeRandomColor();
}
const h2 = document.querySelectorAll('.h2');
for (let h2s of h2) {
    h2s.addEventListener('click', colorize )
        // this.style.backgroundColor = makeRandomColor();
        // this.style.color = makeRandomColor();
        // h2s.style.backgroundColor = makeRandomColor();
        // h2s.style.color = makeRandomColor();
}
function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}


