var photos = document.getElementsByClassName('collage__item');
for (let i = 0; i < photos.length; i++) {
    photos[i].addEventListener("click",function(){
       let image = photos[i].firstChild.cloneNode(false);
       var bigImage = document.getElementById('bigImage');
       bigImage.classList.toggle('hide'); 
       bigImage.appendChild(image);
    });   
}

// document.body.addEventListener('click',function(){
//     if (bigImage.classList.contains('hide')==false){
//         bigImage.classList.add('hide'); 
//     }
    
// });