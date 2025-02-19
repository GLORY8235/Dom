
// -type q  of loop
//  for loop 
// while loop
// forreach loop 
// for/of loop
// for/in loop *
let rtn = document.querySelector('.new_project');
for (let x = 0; x < 50; x++){
rtn.innerHTML += "yess" + "<br>"
}

// let hello1 = document.querySelector('.hello1')
// hello1.addEventListener('click', function(){
//     alert('yes')

// })

let mybtn = document.querySelectorAll('.doublebtn');
for (let i =0; i < mybtn.length; i++){
    mybtn[i].addEventListener('click', function(){
        alert('yes')
    })
}
// lecture

let mygobtn = document.querySelectorAll('.gobtn');
let myinput = document.querySelectorAll('.gbtn');

for(let xx = 0; xx <mygobtn.length; xx++){
    mygobtn[xx].onclick = function(){
        myinput[xx].value = this.getAttribute('att')
        mygobtn[xx].innerHTML = this.getAttribute('att')

}

}

let str = "adcdefghijklmnopqrstuvwyz";
let str2 = "wellcome to manful comuter, uyo akwa ibom state manful nigeria manful";
// rtn.innerHTML = 'string length is ' + str.length;
// rtn.innerHTML = str2.slice(0, 48);
// let inj = "https://manfulict.com/asset/imq/companyLogo.png";

// rtn.innerHTML = inj.substring(32, 47);

let inj = "https://manfulict.com/asset/imq/companyLogo.png";

// Extracting the last part
let lastPart = inj.substring(inj.lastIndexOf("/") + 1);
// console.log("Last Part:", lastPart); // Output: "companyLogo.png"
rtn.innerHTML = lastPart;


// let btns = document.querySelector('.btnsy');
// let input =document.querySelector('.inputs')
// btns.addEventListener('click', function(){
//   alert('yes')
//   for(let)
// })

let name = "manful computer"
let Location = "298 nwaniba road"


// SPLIT is use to convert method to array

let lowercase = "today is monday, this is manful computer ict"
let xs = lowercase.split(' ');
xs.forEach(element =>{
    rtn.innerHTML += element + '<brh> '
})

// console.log(xs);



// rtn.innerHTML = str2.substring(0, 20);




// let array =[
//     'C:/Users/USER/Desktop/desktop'
// ]




  
    // Create an image element
    // const img = document.createElement('img');
    
    // // Set the image source
    // img.src = 'my.jpg';
    // img.alt = 'Placeholder Image';
    // img.width = 150;
    // img.height = 150;

    // // Append the image to a container
    // document.getElementById('image-container').appendChild(img);

    
    
     
        // Array of relative paths to images
        // const images = [
        //   'C:/Users/USER/Desktop/desktopmy.jpg'
        // //   './images/image2.jpg'?
        // ];
    
        // const container = document.getElementById('image-container');
    
        // Loop through the array and create img elements
        // images.forEach((src) => {
        //   const img = document.createElement('img');
        //   img.src = 'C:/Users/USER/Desktop/desktop'; // Use relative path;
        //   img.alt = 'Local Image';
        //   img.width = 150;
        //   img.height = 150;
    
        //   container.appendChild(img);
        // });
      


    