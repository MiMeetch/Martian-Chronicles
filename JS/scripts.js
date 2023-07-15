window.addEventListener('DOMContentLoaded', function() {
    const backgroundElement = document.getElementById('background');
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Ebu12BEIOtx4Dz9PPjuHwb6IrwUchNylWAqw9pYS`)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data)
        const backgroundImageUrl = data.hdurl;
        backgroundElement.style.backgroundImage = 'url(' + backgroundImageUrl + ')';
    })
})
