var fio = document.forms[0].elements[0];
var email = document.forms[0].elements[4];
var myform = document.forms[0];
var gender = document.form.gender;
var age = document.form.age;
var telephone = document.form.telephone;
var truePhone = /^((8|\+7|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g;
var trueFio = /^([а-яА-Я ]{2,30})\s([а-яА-Я ]{2,30})\s([а-яА-Я]{2,30})$/g;

myform.addEventListener('submit', (e) => {

  if (fio.value === '' || fio.value == null) {
    alert("Введите фио");
    e.preventDefault();
    fio.focus();
  }
  else {
    if (trueFio.test(fio.value) != true) {
      alert("Введите корректные фио");
      e.preventDefault();
      fio.focus();
    }
  }

  if ((gender[0].checked == false) && (gender[1].checked == false)) {
    alert("Пожалуйста, выберите Ваш пол: Мужской или Женский");
    e.preventDefault();
  }

  if (email.value === '' || email.value == null) {
    alert("Введите mail");
    e.preventDefault();
    email.focus();
  }
  if (age.value == '-') {
    alert("Введите возраст");
    e.preventDefault();
    age.focus();
  }
  // console.log(/^((8|\+7|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(telephone.value));
  if (telephone.value == "" || telephone.value == null) {
    alert("Введите номер телефона");
    e.preventDefault();
    telephone.focus();
  }
  else {
    if (truePhone.test(telephone.value) != true) {
      alert("Введите корректный номер телефона");
      e.preventDefault();
      telephone.focus();
    }
  }

});