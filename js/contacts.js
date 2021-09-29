var fio = document.forms[0].elements[0];
var email = document.forms[0].elements[4];
var myform = document.forms[0];
var gender = document.form.gender;

myform.addEventListener('submit', (e) => {
  if (fio.value === '' || fio.value == null) {
    alert("Введите фио");
    e.preventDefault();
    fio.focus();
  }
  if (email.value === '' || email.value == null) {
    alert("Введите mail");
    e.preventDefault();
    email.focus();
  }
  if ( ( gender[0].checked == false ) && ( gender[1].checked == false ) )
        {
                alert ( "Пожалуйста, выберите Ваш пол: Мужской или Женский" );
                e.preventDefault();
        }
  
})