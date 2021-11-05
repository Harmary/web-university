$("#btn-submit").click(function (e) { 
    e.preventDefault();
    $("#openModal").show();
});

$("#close,.no-btn").click(function () { 
    $("#openModal").hide();
});

$(".yes-btn").click(function () { 
    $("#form").submit();
    $("#openModal").hide();
});