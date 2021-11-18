
var bdayInput = $("#bday");
var calendar = $("#calendar");
var dateLink = $(".date-link");

$("#bday").focus(function () {
    $("#calendar").css("display", "flex");
});


$(".date-link").click(function () { 
    $("#calendar").hide();
});


drawMonth(0, 31);
selectDate(1);

function drawMonth(d, daysInMonth) {
    day = 1;
    d++;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (d > 1) {
                d--;
                document.getElementById("td-" + i + "-" + j).innerHTML = '🗓';
            } else if (daysInMonth > 0) {
                document.getElementById("td-" + i + "-" + j).innerHTML = '<a href="#" class="date-link" onclick="selectDate(' + day + ');return false;">' + day + '</a>';
                day++;
                daysInMonth--;
            } else {
                document.getElementById("td-" + i + "-" + j).innerHTML = '🗓';
            }
        }
    }
}

function selectDate(day) {
    var year = $("#year-select").val();
    var month = $("#month-selection").val();
    if(month<10){
        month = '0'+month;
    }
    $("#bday").val(day + '.' + month + '.' + year);
}


function changeDate() {
    var d = new Date();
    var year = $("#year-select").val();
    var month = $("#month-selection").val();
    var d = new Date(year, month - 1, 0);
    drawMonth(d.getDay(), new Date($("#year-select").val(), $("#month-selection").val(), 0).getDate());
}

$("#year-select").change(function (event) {
    changeDate();
});

$("#month-selection").change( function (event) {
    changeDate();
});