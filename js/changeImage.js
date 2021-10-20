var image = document.getElementsByClassName("nav-img");
var menuItems = document.getElementsByClassName("nav-link");

for(let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("mouseover",function changeImage(){
        
        image[i].src = "/img/star.svg";
    });
    menuItems[i].addEventListener("mouseout",function changeImage(){
        // if(menuItems[i].className !== "active"){
            image[i].src = "/img/cycle.svg";
        // }
        
    });
    // menuItems[i].addEventListener("click",function changeLinkClass(){
    //     menuItems[i].classList += "active";
    // });
}
