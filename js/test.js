var fio = document.forms[0].elements[0];
var email = document.forms[0].elements[4];
var myform = document.forms[0];
var firstQuestion1 = document.form.firstAnswer1;
var firstQuestion2 = document.form.firstAnswer2;
var thirdQuestion = document.form.thirdTextarea;
var secondQuestion = document.form.secondQuestion;
var group = document.form.studyGroup;
var trueFio = /^([A-Za-zА-Яа-яёЁ]{2,30})\s([A-Za-zА-Яа-яёЁ]{2,30})\s([A-Za-zА-Яа-яёЁ]{2,30})$/;



var fioValidator = () => {
  if (fio.value === '' || fio.value == null) {
    fio.setCustomValidity("Введите фио");
  } else if (!trueFio.test(fio.value)) {
    fio.setCustomValidity("Введите корректные фио");
  } else {
    fio.setCustomValidity('');
  }
};

fio.addEventListener('change', fioValidator);


var emailValidator = () => {
  if (email.value === '' || email.value == null) {
    email.setCustomValidity("Введите mail");
  } else {
    email.setCustomValidity("");
  }
};

email.addEventListener('change', emailValidator);

var groupValidator = () => {
  if (group.value == '-') {
    group.setCustomValidity('Выбирете вашу группу');
  }
  else{
    group.setCustomValidity('');
  }
};

group.addEventListener('change',groupValidator);

var secondQuestionValidator = () => {
  if (secondQuestion.value == '-') {
    secondQuestion.setCustomValidity('Ответьте на второй вопрос');
  }
  else{
    secondQuestion.setCustomValidity('');
  }
};

secondQuestion.addEventListener('change', secondQuestionValidator);

var firstQuestionValidator = () => {
  if ((firstQuestion1.checked == false) && (firstQuestion2.checked == false)) {
    firstQuestion1.setCustomValidity('Ответьте на первый вопрос');
  }
  else{
    firstQuestion1.setCustomValidity('');
  }
};

firstQuestion1.addEventListener('change',firstQuestionValidator);

var thirdQuestionValidator = () => {
  
  if (thirdQuestion.value === '' || thirdQuestion.value == null) {
    thirdQuestion.setCustomValidity("Ответьте на третий вопрос");
    
  } else 
    if (/[0-9]/.test(thirdQuestion.value)) {
      thirdQuestion.setCustomValidity("Запишите ответ на 3 вопрос без использования цифр");
    }
  else {
    thirdQuestion.setCustomValidity('');
  }
};

thirdQuestion.addEventListener('change',thirdQuestionValidator);

fioValidator();
emailValidator();
groupValidator();
firstQuestionValidator();
secondQuestionValidator();
thirdQuestionValidator();