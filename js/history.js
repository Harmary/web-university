var pageTitles = [
    "Главная", //0
    "Обо мне", //1
    "Мои интересы", //2
    "Учеба", //3
    "Галерея", //4
    "Контакт", //5
    "Тест", //6
    "История" //7
  ];

function setCookie(url)
{
  var pageGlobalSession = localStorage.getItem(url);
  if(pageGlobalSession == "NaN" || pageGlobalSession == undefined)
  {
    pageGlobalSession = 0;
  }
  var pageLocalSession = sessionStorage.getItem(url);
  if(pageLocalSession == "NaN" || pageLocalSession == undefined)
  {
    pageLocalSession = 0;
    for (let pageTitle in pageTitles) {
      sessionStorage.setItem(pageTitle, 0);
    }
  }
  localStorage.setItem(url, parseInt(pageGlobalSession)+1);
  sessionStorage.setItem(url, parseInt(pageLocalSession)+1);
}

function getCookie(url, isLocalSession)
{
  if(isLocalSession)
  {
    return sessionStorage.getItem(url);
  }
  else {
    return localStorage.getItem(url);
  }
}

function drawSessionTable(isLocalSession)
{
  for (let pageTitle in pageTitles) {
    document.write("<tr>");
    document.write('<td>'+pageTitles[pageTitle]+'</td>');
    document.write('<td>'+getCookie(pageTitle, isLocalSession)+'</td>');
    document.write("</tr>");
  }
}

function clearCookies()
{
  localStorage.clear();
  sessionStorage.clear();
  return true;
}

function startCookies()
{
  var i = 0;
  for (let pageTitle in pageTitles) {
    localStorage.setItem(i, 0);
    sessionStorage.setItem(i, 0);
    i++;
  }
  return true;
}