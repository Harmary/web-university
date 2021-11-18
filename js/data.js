function zeroFirstFormat(value){
    if(value<10){
        value = '0'+value;
    }
    return value;
}

function generateData(){
    let data = new Date();
    let weekDay = data.getDay();
    switch (weekDay) {
        case 0:
            weekDay = "Воскресенье";
            break;
        case 1:
            weekDay = "Понедельник";
            break;

        case 2:
            weekDay = "Вторник";
            break;

        case 3:
            weekDay = "Среда";
            break;
        case 4:
            weekDay = "Четверг";
            break;

        case 5:
            weekDay = "Пятница";
            break;

        case 6:
            weekDay = "Суббота";
            break;

        default:
            break;
    }
    let day = zeroFirstFormat(data.getDate());
    let month = zeroFirstFormat(data.getMonth()+1);
    let TextNode = day + "." +
        month + "." +
        data.getFullYear() + " " +
        weekDay + " " +
        data.toLocaleTimeString();
    return TextNode;
}

function DisplayData() {
    let data = new Date();
    $("#data").html(generateData());
    setInterval(() => {
        $("#data").html(generateData());
    }, 1000);
    
}
DisplayData();