// var link = document.getElementById("#dropdown");
// var dropDown = document.getElementById("myDropdown");

// link.addEventListener("mouseover",function(){
//     dropDown.classList.add('show');
// } );

// dropDown.addEventListener("mouseout",function(){
//     dropDown.classList.remove('show');
// } )
$("#dropdown").mouseenter(function(){
    $("#myDropdown").addClass('show');
});
$("#myDropdown").mouseleave(function(){
    $("#myDropdown").removeClass('show');
});