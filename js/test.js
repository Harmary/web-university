var fio = document.forms[0].elements[0];
var email = document.forms[0].elements[4];
var myform = document.forms[0];
var firstQuestion1 = document.form.firstAnswer1;
var firstQuestion2 = document.form.firstAnswer2;
var thirdQuestion = document.form.thirdTextarea;
var secondQuestion = document.form.secondQuestion;
var group = document.form.studyGroup;

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
  if(secondQuestion.value == '-'){
    alert("Ответьте на второй вопрос");
    e.preventDefault();
    secondQuestion.focus();
  }
  if(group.value == '-'){
    alert("Выберите свою группу");
    e.preventDefault();
    group.focus();
  }
  if ( ( firstQuestion1.checked == false ) && ( firstQuestion2.checked == false ) )
        {
                alert ( "Пожалуйста, выберите ответ на первый вопрос" );
                e.preventDefault();
        }
  if (thirdQuestion.value === '' || thirdQuestion.value == null) {
    alert("Ответьте на третий вопрос");
    e.preventDefault();
    thirdQuestion.focus();
  }
  else {
    if(/[0-9]/.test(thirdQuestion.value)){
      alert("Запишите ответ на 3 вопрос без использования цифр");
      e.preventDefault();
      thirdQuestion.focus();
    }
  }
});