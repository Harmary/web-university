function gallery() {
    var path = "/img/Галерея/";
    var rowNum = 5;
    var itemNum = 3;
    var item = 0;

    let photos = [
        "lift.JPG", "IMG_2481.JPG", "IMG_3981.jpg",
        "IMG_2998.jpg", "IMG_5091.jpg", "IMG_5898.jpg",
        "IMG_8762.JPG", "IMG_7385.jpg", "IMG_7507.jpg",
        "IMG_7699.jpg", "IMG_8074.jpg", "IMG_8115.jpg",
        "IMG_8242.jpg", "IMG_6463.jpg", "2021-08-20.jpg"
    ];
    let titles = [
        "Лифт", "Парк", "Сестра и я",
        "Море", "Волейбол", "Лавандовое поле",
        "Рассвет на пляже", "Hungry bird", "Рассвет в Ялте",
        "Кот", "Колесо обозрения", "Шторм",
        "Пикник", "Surfcoffee", "Чтение во дврике"
    ];

    for (let i = 0; i < photos.length; i++) {
        photos[i] = path + photos[i];
    }

    for (let i = 0; i < rowNum; i++) {

        document.write('<div class="collage__row row flex-column flex-sm-row justify-content-center ">');

        for (let j = 0; j < itemNum; j++) {
            document.write('<div class="collage__item">');
            document.write('<img src="' + photos[item] + '" alt="' + titles[item] + '">');
            document.write('<span>' + titles[item] + '</span>');
            document.write('</div>');
            item++;
        }

        document.write('</div>');
    }

}

gallery();