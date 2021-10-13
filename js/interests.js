
function WriteList(typeList, ...args) {
    document.write('<' + typeList + 'l>');
    for(i = 0; i < args.length; i++ ){
        document.write('<li> <a>' + args[i] + '</a></li>');            
    }
    document.write('</' + listType + 'l>');
}
WriteList('u','Мои любимые книги','Мои любимые фильмы','Мои хобби');
