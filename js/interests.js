
function WriteList(listType) {
    document.write('<' + listType + 'l>');
    for(i = 1; i < WriteList.arguments.length; i++ ){
        document.write('<li> <a>' + WriteList.arguments[i] + '</a></li>');            
    }
    document.write('</' + listType + 'l>');
}

WriteList('u','Мои любимые книги','Мои любимые фильмы','Мои хобби');