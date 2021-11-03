var monthEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthRu = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
for (let i = 1; i <= 12; i++) {
    document.write('<option value="' + i + '">' + monthRu[i - 1] + '</option>');
}