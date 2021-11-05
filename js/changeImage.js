var image = document.getElementsByClassName("nav-img");
var menuItems = document.getElementsByClassName("nav-link");
var src = location.href.split('/');
src.reverse();

for(let i = 0; i < menuItems.length; i++){
    let itemSrc = menuItems[i].href.split('/');
    itemSrc.reverse();
    if (src[0] == itemSrc[0]) {
        menuItems[i].classList.add('myactive');
        image[i].src = "/img/star.svg";
    }
    menuItems[i].addEventListener("mouseover",function changeImage(){
        image[i].src = "/img/star.svg";
    });
    menuItems[i].addEventListener("mouseout",function changeImage(){
        if(!menuItems[i].classList.contains("myactive")){
            image[i].src = "/img/cycle.svg";
        }
    });
     menuItems[i].addEventListener("click",function changeLinkClass(){
        image[i].src = "/img/star.svg";
     });
}