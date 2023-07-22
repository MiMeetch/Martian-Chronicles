const rightButton = document.getElementById('rightButton')
const leftButton = document.getElementById('leftButton')
const Roadster = document.getElementById('Roadster')
const Rover1 = document.getElementById('Rover1')
const Rover2 = document.getElementById('Rover2')
const Title = document.getElementById('Title')
const Exit = document.getElementById('Exit')
const Rover1Button = document.getElementById('rover1Button')
const Rover2Button = document.getElementById('rover2Button')
const Starman = document.getElementById('Starman')
const backButton = document.getElementById('back-button')
const nextButton = document.getElementById('next-button')
const ImageCarousel = document.getElementById('ImageCarousel')
const marsImage = document.getElementById('mars-image')
const roadsterData = document.getElementById('roadster-data')

// let audio = new Audio("../Sounds/Starman.mp3");
audio.currentTime = 52;

let images = []
let current = 0

Roadster.style.transition = "width 0s, height 0s, left 1s ease-out, top 1s ease-out";
Rover1.style.transition = "width 0s, height 0s, left 1s ease-out, top 1s ease-out"
Rover2.style.transition = "width 0s, height 0s, left 1s ease-out, top 1s ease-out"
Title.style.transition = "width 0s, height 0s, left 1s ease-out, top 1s ease-out"
ImageCarousel.style.transition = "width 0s, height 0s, left 1s ease-out, top 1s ease-out"
marsImage.style.transition = "width 0s, height 0s, left 1s ease-out, top 1s ease-out"
Starman.style.transition = "all 5s ease-out"
roadsterData.style.transition = "width 0s, height 0s, left 1s ease-out, top 1s ease-out";


//Roadster Button Press
leftButton.addEventListener('click', function(){

    Roadster.style.left = "50%"
    Roadster.style.top = "80%"

    Rover1.style.left = "150%"

    Rover2.style.left = "150%"

    Title.style.left = "250%"

    leftButton.style.visibility = "hidden"
    rightButton.style.visibility = "hidden"
    Exit.style.visibility = "visible"
    roadsterData.style.visibility = "visible"

    Starman.style.top = "100%"
    Starman.style.left = "0%"

    roadsterData.style.top = "35%"

    audio.play()

})

//Surface Button Press
rightButton.addEventListener('click', function(){
    Rover1Button.style.transition = "all 1s ease-out, visibility 0s ease-out"
    Rover2Button.style.transition = "all 1s ease-out, visibility 0s ease-out"

    Roadster.style.left = "-50%"

    Rover1.style.left = "75%"

    Rover2.style.left = "25%"

    Title.style.left = "-150%"

    Rover1Button.style.left = "25%"
    Rover1Button.style.visibility = "visible"

    Rover2Button.style.left = "75%"
    Rover2Button.style.visibility = "visible"

    leftButton.style.visibility = "hidden"
    rightButton.style.visibility = "hidden"
    Exit.style.visibility = "visible"

})

//Exit Button Press
Exit.addEventListener('click', function(){
    Rover1Button.style.transition = "all 0s ease-out"
    Rover2Button.style.transition = "all 0s ease-out"

    Roadster.style.top = ""
    Roadster.style.left = ""

    Rover1.style.top = ""
    Rover1.style.left = ""

    Rover2.style.top = ""
    Rover2.style.left = ""

    Rover1Button.style.left = ""

    Title.style.left = ""

    Starman.style.top = ""
    Starman.style.left = ""

    marsImage.style.top = ""
    ImageCarousel.style.top = ""

    roadsterData.style.top = ""

    leftButton.style.visibility = "visible"
    rightButton.style.visibility = "visible"
    Exit.style.visibility = "hidden"
    Rover1Button.style.visibility = "hidden"
    Rover2Button.style.visibility = "hidden"
    ImageCarousel.style.visibility = "hidden"
    marsImage.style.visibility = "hidden"
    Rover1.style.visibility = "visible"
    Rover2.style.visibility = "visible"
    roadsterData.style.visibility = ""

    images = [];
    current = 0;
    marsImage.src = ""
    audio.currentTime = 52;
    audio.pause();
})

//Curiosity Button Press
Rover1Button.addEventListener('click', function() {
    Exit.style.visibility = "visible"
    ImageCarousel.style.visibility = "visible"
    marsImage.style.visibility = "visible"
    ImageCarousel.style.top = "50%"
    marsImage.style.top = "50%"
    Rover1.style.visibility = "hidden"
    Rover2.style.visibility = "hidden"
    Rover1Button.style.visibility = "hidden"
    Rover2Button.style.visibility = "hidden"
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Ebu12BEIOtx4Dz9PPjuHwb6IrwUchNylWAqw9pYS')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for(i = 0; i < data.photos.length; i++) {
                images.push(data.photos[i].img_src);
            }
        marsImage.src = images[current]
        })
})

//Spirit Button Press
Rover2Button.addEventListener('click', function() {
    Exit.style.visibility = "visible"
    ImageCarousel.style.visibility = "visible"
    marsImage.style.visibility = "visible"
    ImageCarousel.style.top = "50%"
    marsImage.style.top = "50%"
    Rover1.style.visibility = "hidden"
    Rover2.style.visibility = "hidden"
    Rover1Button.style.visibility = "hidden"
    Rover2Button.style.visibility = "hidden"
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=10&api_key=Ebu12BEIOtx4Dz9PPjuHwb6IrwUchNylWAqw9pYS')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for(i = 0; i < data.photos.length; i++) {
                images.push(data.photos[i].img_src);
            }
        marsImage.src = images[current]
        })
})

backButton.addEventListener("click", (e) => {
    if (current > 0) {
        current--
        marsImage.src = images[current]
    }
})

nextButton.addEventListener("click", (e) => {
    if (current < images.length - 1) {
        current++
        marsImage.src = images[current]
    }
})


fetch("https://api.spacexdata.com/v4/roadster") 
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
