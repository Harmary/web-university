var bdayInput = document.getElementById("bday");
var calendar = document.getElementById("calendar");
bdayInput.addEventListener("focus", function () {
    calendar.style.display = "flex";
});
bdayInput.addEventListener("blur", function () {
    if (bdayInput.value != '1.01.1940') {
        calendar.style.display = "none";
    }

});
// calendar.addEventListener("click",function(){
//     calendar.style.display = "block";    
// });


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
                document.getElementById("td-" + i + "-" + j).innerHTML = '<a href="#" onclick="selectDate(' + day + ');return false;">' + day + '</a>';
                day++;
                daysInMonth--;
            } else {
                document.getElementById("td-" + i + "-" + j).innerHTML = '🗓';
            }
        }
    }
}

function selectDate(day) {
    var year = document.getElementById("year-select").value;
    var month = document.getElementById("month-selection").value;
    if(month<10){
        month = '0'+month;
    }
    document.getElementById("bday").value = day + '.' + month + '.' + year;
}


function changeDate() {
    var d = new Date();
    var year = document.getElementById("year-select").value;
    var month = document.getElementById("month-selection").value;
    var d = new Date(year, month - 1, 0);
    drawMonth(d.getDay(), new Date(year, month, 0).getDate());
}

document.getElementById("year-select").onchange = function (event) {
    changeDate();
};

document.getElementById("month-selection").onchange = function (event) {
    changeDate();
};