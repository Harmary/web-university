var fio = document.getElementById("fio");
var email = document.getElementById("form-email");
var myform = document.getElementById("form");
var genderMale = document.getElementById("gender-male");
var genderFemale = document.getElementById("gender-female");
var age = document.getElementById("form-age");
var bday = document.getElementById("bday");
var telephone = document.getElementById("form-telephone");
var submit = document.getElementById("submit");
var flags = {
  _fio: false,
  _bday: false,
  _age: false,
  _mail: false,
  _telephone: false
};

var truePhone = /^((8|\+7|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
var trueFio = /^([A-Za-zА-Яа-яёЁ]{2,30})\s([A-Za-zА-Яа-яёЁ]{2,30})\s([A-Za-zА-Яа-яёЁ]{2,30})$/;

fio.insertAdjacentHTML("afterend", "<div class='validation-feedback' id='fio-feedback'></div>");
email.insertAdjacentHTML("afterend", "<div class='validation-feedback' id='email-feedback'></div>");
bday.insertAdjacentHTML("afterend", "<div class='validation-feedback' id='bday-feedback'></div>");
telephone.insertAdjacentHTML("afterend", "<div class='validation-feedback' id='telephone-feedback'></div>");
age.insertAdjacentHTML("afterend", "<div class='validation-feedback' id='age-feedback'></div>");
submit.setAttribute("disabled", true);

function canSubmit() {
  let submitKey = false;
  for (const key in flags) {
    if (flags[key] == false) {
      submitKey = true;
    }
  }
  return submitKey;
}

//проверкак фио
fio.addEventListener("blur", function () {
  if (fio.value === '' || fio.value == null) {
    fio.style.border = "1px solid #dc3545";
    if (!document.getElementById("fio-feedback").classList.contains("bad")) {
      document.getElementById("fio-feedback").classList.add("bad");
    }

    document.getElementById("fio-feedback").innerHTML = "Введите фио";
  } else if (!trueFio.test(fio.value)) {
    fio.style.border = "1px solid #dc3545";
    if (!document.getElementById("fio-feedback").classList.contains("bad")) {
      document.getElementById("fio-feedback").classList.add("bad");
    }
    document.getElementById("fio-feedback").innerHTML = "Введите корректные фио";
  } else {
    fio.style.border = "1px solid #198754";
    document.getElementById("fio-feedback").innerHTML = "";
    flags["_fio"] = true;
  }
  submit.disabled = canSubmit();
});

//проверка почты
email.addEventListener('blur', function () {
  if (email.value === '' || email.value == null) {
    email.style.border = "1px solid #dc3545";
    if (!document.getElementById("email-feedback").classList.contains("bad")) {
      document.getElementById("email-feedback").classList.add("bad");
    }
    document.getElementById("email-feedback").innerHTML = "Введите mail";
  } else {
    email.style.border = "1px solid #198754";
    document.getElementById("email-feedback").innerHTML = "";
    flags["_mail"] = true;
  }
  submit.disabled = canSubmit();
});


// проверка даты рождения
bday.addEventListener('blur', function () {
  if (bday.value === '' || bday === null) {
    bday.style.border = "1px solid #dc3545";
    if (!document.getElementById("bday-feedback").classList.contains("bad")) {
      document.getElementById("bday-feedback").classList.add("bad");
    }
    document.getElementById("bday-feedback").innerHTML = "Введите день рождения";
  } else {
    bday.style.border = "1px solid #198754";
    document.getElementById("bday-feedback").innerHTML = "";
    flags["_bday"] = true;
  }
  submit.disabled = canSubmit();
});

// проверка телефона

telephone.addEventListener("blur", function () {
  if (telephone.value == "" || telephone.value == null) {
    telephone.style.border = "1px solid #dc3545";
    if (!document.getElementById("telephone-feedback").classList.contains("bad")) {
      document.getElementById("telephone-feedback").classList.add("bad");
    }
    document.getElementById("telephone-feedback").innerHTML = "Введите номер телефона";
  } else if (truePhone.test(telephone.value) != true) {
    // telephone.setCustomValidity("Введите корректный номер телефона");
    telephone.style.border = "1px solid #dc3545";
    if (!document.getElementById("telephone-feedback").classList.contains("bad")) {
      document.getElementById("telephone-feedback").classList.add("bad");
    }
    document.getElementById("telephone-feedback").innerHTML = "Введите корректный номер телефона";
  } else {
    telephone.style.border = "1px solid #198754";
    document.getElementById("telephone-feedback").innerHTML = "";
    flags["_telephone"] = true;
  }
  submit.disabled = canSubmit();
});

// проверка возраста

age.addEventListener("blur", function () {
  if (age.value == "-") {
    age.style.border = "1px solid #dc3545";
    if (!document.getElementById("age-feedback").classList.contains("bad")) {
      document.getElementById("age-feedback").classList.add("bad");
    }
    document.getElementById("age-feedback").innerHTML = "Введите возраст";

  } else {
    age.style.border = "1px solid #198754";
    document.getElementById("age-feedback").innerHTML = "";
    flags["_age"] = true;
  }
  submit.disabled = canSubmit();
});

var genderValidator = ()=>{
  if ((genderMale.checked == false) && (genderFemale.checked == false)) {
    genderMale.setCustomValidity("Выберете пол");
  } else {
    genderMale.setCustomValidity("");
  }
};

genderMale.addEventListener('change',genderValidator);

genderValidator();


