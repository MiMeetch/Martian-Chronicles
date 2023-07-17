window.addEventListener('DOMContentLoaded', function() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Ebu12BEIOtx4Dz9PPjuHwb6IrwUchNylWAqw9pYS`)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data)
        const backgroundElement = document.getElementById('background');
        const backgroundTitle = document.getElementById('APOD-Title')
        const backgroundImageUrl = data.hdurl;
        const backgroundImageTitle = data.title;
        const backgroundImageExplanation = data.explanation;
        backgroundElement.style.backgroundImage = 'url(' + backgroundImageUrl + ')';
        backgroundTitle.innerText = backgroundImageTitle;
        console.log(backgroundImageTitle)
        console.log(backgroundImageExplanation)
    })
})
