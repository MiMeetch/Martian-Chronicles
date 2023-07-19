const rightButton = document.getElementById('rightButton')
const leftButton = document.getElementById('leftButton')
const Insight = document.getElementById('Insight')
const Rover1 = document.getElementById('Rover1')
const Rover2 = document.getElementById('Rover2')
const Title = document.getElementById('Title')
const Exit = document.getElementById('Exit')
const Rover1Button = document.getElementById('rover1Button')
const Rover2Button = document.getElementById('rover2Button')

Insight.style.transition = "all 1s ease-out"
Rover1.style.transition = "all 1s ease-out"
Rover2.style.transition = "all 1s ease-out"
Title.style.transition = "all 1s ease-out"
Rover1Button.style.transition = "all 1s ease-out"
Rover2Button.style.transition = "all 1s ease-out"

//Weather Button Press
leftButton.addEventListener('click', function(){

    Insight.style.left = "50%"
    Insight.style.top = "80%"

    Rover1.style.left = "150%"

    Rover2.style.left = "150%"

    Title.style.left = "150%"

    leftButton.style.visibility = "hidden"
    rightButton.style.visibility = "hidden"
    Exit.style.visibility = "visible"

})

//Surface Button Press
rightButton.addEventListener('click', function(){

    Insight.style.left = "-50%"

    Rover1.style.left = "75%"

    Rover2.style.left = "25%"

    Title.style.left = "-50%"

    Rover1Button.style.left = "25%"
    Rover1Button.style.top = "60%"
    Rover1Button.style.visibility = "visible"

    Rover2Button.style.left = "75%"
    Rover2Button.style.top = "60%"
    Rover2Button.style.visibility = "visible"

    leftButton.style.visibility = "hidden"
    rightButton.style.visibility = "hidden"
    Exit.style.visibility = "visible"

})

//Exit Button Press
Exit.addEventListener('click', function(){
    Insight.style.top = "75%"
    Insight.style.left = "25%"

    Rover1.style.top = "75%"
    Rover1.style.left = "87.5%"

    Rover2.style.top = "75%"
    Rover2.style.left = "62.5%"

    Title.style.top = "25%"
    Title.style.left = "50%"

    Rover1Button.style.left = "75%"
    Rover1Button.style.top = "50%"

    Rover2Button.style.left = "75%"
    Rover2Button.style.top = "50%"

    leftButton.style.visibility = "visible"
    rightButton.style.visibility = "visible"
    Exit.style.visibility = "hidden"
    Rover1Button.style.visibility = "hidden"
    Rover2Button.style.visibility = "hidden"
})