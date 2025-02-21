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



const form = document.querySelector('#shelterForm');
const inputs = document.querySelector('#catName')
const list = document.querySelector('#cats')
form.addEventListener("submit", function (e) {
    // e.preventDefault();
    // when the form is submited do not sent any request just end here
    // just stop 
    const catName = inputs.value; 
    const newLi = document.createElement("LI")
   newLi.innerText = catName;
   list.append(newLi);
   inputs.value = "";
})


// const tweetform = document.querySelector('#tweetForm');
// const tweetContainer = document.querySelector('.tweetted')
// tweetform.addEventListener("submit", function (e) {
//     e.preventDefault();
//     // const usernameinput = document.querySelectorAll('#input1')[0]
//     // const tweetinput = document.querySelectorAll('#input1')[1]
//     // console.log(usernameinput.value, tweetinput.value)
//     const usernameinput = tweetform.elements.username;
//     const tweetinput = tweetform.elements.tweet;
//     addTweet(usernameinput.value, tweetinput.value)
//     usernameinput.value = '';
//     tweetinput.value = '';

// })
// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetContainer.append(newTweet);
// }
// Select the tweet form and the container where tweets will be displayed
const tweetform = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

// Add an event listener for form submission
tweetform.addEventListener("submit", function (e) {
    // e.preventDefault(); // Prevent the default form submission

    // Access the input elements via the form's elements collection
    const usernameinput = tweetform.elements.username;
    const tweetinput = tweetform.elements.tweet;

    // Add the tweet to the container
    addTweet(usernameinput.value, tweetinput.value);

    // Clear the input fields after submission
    usernameinput.value = '';
    tweetinput.value = '';
});

// Function to create a new tweet element and append it to the container
const addTweet = (username, tweet) => {
    // Create a new list item for the tweet
    const newTweet = document.createElement('li');

    // Create a bold tag for the username
    const bTag = document.createElement('b');
    bTag.append(username); // Insert the username into the bold tag

    // Append the bold username and the tweet text to the list item
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);

    // Append the new tweet element to the tweet container
    tweetContainer.append(newTweet);
}


