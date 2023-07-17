window.addEventListener('DOMContentLoaded', function() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Ebu12BEIOtx4Dz9PPjuHwb6IrwUchNylWAqw9pYS`)
    .then((resp) => resp.json())
    .then(function(data) {

        console.log(data);

        const backgroundElement = document.getElementById('background');
        const backgroundTitle = document.getElementById('APOD-Title');
        const backgroundExplanation = document.getElementById('APOD-Explanation');

        const backgroundImageUrl = data.hdurl;
        const backgroundImageTitle = data.title;
        const backgroundImageExplanation = data.explanation;

        backgroundElement.style.backgroundImage = 'url(' + backgroundImageUrl + ')';

        let i = 0;

        const intervalId = setInterval(function() {
            backgroundTitle.innerHTML += backgroundImageTitle[i]
            i++;
            if(i===backgroundImageTitle.length) {
                clearInterval(intervalId);
                return;
            }
        }, 100);

        let j = 0;

        const intervalId2 = setInterval(function() {
            backgroundExplanation.innerHTML += backgroundImageExplanation[j]
            j++;
            if(j===backgroundImageExplanation.length) {
                clearInterval(intervalId2);
                return;
            }
        }, 50);
    })
})
