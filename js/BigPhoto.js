var close = document.getElementById('closeCross');
var bigPhoto = document.getElementById('bigImage');
var photos = document.getElementsByClassName('collage__item');
var content = document.getElementById('img01');
var captionText = document.getElementById('caption');

close.addEventListener("click", function () {
    bigPhoto.style.display = 'none';
});

for (let i = 0; i < photos.length; i++) {
    photos[i].addEventListener("click", function () {
        bigPhoto.style.display = 'block';
        content.src = photos[i].firstChild.src;
        captionText.innerHTML = photos[i].firstChild.alt; 
    });
}