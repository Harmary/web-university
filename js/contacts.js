var fio = document.forms[0].elements[0];
var email = document.forms[0].elements[4];
var myform = document.forms[0];
var gender = document.form.gender;
var age = document.form.age;
var telephone = document.form.telephone;
var truePhone = /^((8|\+7|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
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

fio.addEventListener('change', fioValidator,false);


var genderValidator = ()=>{
  if ((gender[0].checked == false) && (gender[1].checked == false)) {
    gender[0].setCustomValidity("Выберете пол");
  } else {
    gender[0].setCustomValidity("");
  }
};

gender[0].addEventListener('change',genderValidator);


var emailValidator = () => {
  if (email.value === '' || email.value == null) {
    email.setCustomValidity("Введите mail");
  } else {
    email.setCustomValidity("");
  }
};

email.addEventListener('change', emailValidator);


var ageValidator = () => {
  if (age.value == '-') {
    age.setCustomValidity("Введите возраст");
  } else {
    age.setCustomValidity("");
  }
};
age.addEventListener('change', ageValidator);


var telephoneValidator = () => {
  if (telephone.value == "" || telephone.value == null) {
    telephone.setCustomValidity("Введите номер телефона");
  } else if (truePhone.test(telephone.value) != true) {
    telephone.setCustomValidity("Введите корректный номер телефона");
  } else {
    telephone.setCustomValidity("");
  }
};
telephone.addEventListener('change', telephoneValidator);


fioValidator();
genderValidator();
emailValidator();
ageValidator();
telephoneValidator();