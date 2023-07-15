document.addEventListener('DOMContentLoaded', function(){
    const image = document.getElementById('image')
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Ebu12BEIOtx4Dz9PPjuHwb6IrwUchNylWAqw9pYS`)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data)
        const hdurl = data.hdurl;
        image.src = hdurl;
    })
})
