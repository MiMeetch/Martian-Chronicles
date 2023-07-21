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

let images = []
let current = 0

Roadster.style.transition = "all 1s ease-out"
Rover1.style.transition = "all 1s ease-out"
Rover2.style.transition = "all 1s ease-out"
Title.style.transition = "all 1s ease-out"
Starman.style.transition = "all 3s ease-out"

//Roadster Button Press
leftButton.addEventListener('click', function(){

    Roadster.style.left = "50%"
    Roadster.style.top = "80%"

    Rover1.style.left = "150%"

    Rover2.style.left = "150%"

    Title.style.left = "150%"

    leftButton.style.visibility = "hidden"
    rightButton.style.visibility = "hidden"
    Exit.style.visibility = "visible"

    Starman.style.top = "80%"
    Starman.style.left = "0%"

})

//Surface Button Press
rightButton.addEventListener('click', function(){
    Rover1Button.style.transition = "all 1s ease-out"
    Rover2Button.style.transition = "all 1s ease-out"

    Roadster.style.left = "-50%"

    Rover1.style.left = "75%"

    Rover2.style.left = "25%"

    Title.style.left = "-50%"

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

    Roadster.style.top = "75%"
    Roadster.style.left = "26.5%"

    Rover1.style.top = "75%"
    Rover1.style.left = "87.5%"

    Rover2.style.top = "75%"
    Rover2.style.left = "62.5%"

    Rover1Button.style.left = "75%"

    Title.style.left = "50%"

    Starman.style.top = ""
    Starman.style.left = ""

    leftButton.style.visibility = "visible"
    rightButton.style.visibility = "visible"
    Exit.style.visibility = "hidden"
    Rover1Button.style.visibility = "hidden"
    Rover2Button.style.visibility = "hidden"
    ImageCarousel.style.visibility = "hidden"
    marsImage.style.visibility = "hidden"
})

//Curiosity Button Press
Rover1Button.addEventListener('click', function() {
    Exit.style.visibility = "visible"
    ImageCarousel.style.visibility = "visible"
    marsImage.style.visibility = "visible"

    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then(res => res.json())
        .then(data => {
            for(i = 0; i < 856; i++) {
                // console.log(data.photos[i].img_src)
                images.push(data.photos[i].img_src)
            }
            console.log("done")
            console.log(images[4])
        })

})