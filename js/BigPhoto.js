// var close = $('#closeCross');
// var bigPhoto = $('#bigImage');
// var photos = $('.collage__item');
// var content = $('#img01');
// var captionText = $('#caption');

$('#closeCross').click(function () {
    $('#bigImage').hide();
});

let imagesSrc = [];
let imagesAlt = [];
let actualItem = 0;

$('.collage__item').each(function () {
    imagesSrc.push($(this).children(0).attr("src"));
    imagesAlt.push($(this).children(0).attr("alt"));
    $(this).click(function () {
        $('#bigImage').show();
        $('#img01').attr("src", $(this).children(0).attr("src"));
        $('.imgblock').show();
        $('#caption').html($(this).children(0).attr("alt"));
        $('#caption').show();
        for (let i = 0; i < imagesSrc.length; i++) {
            if ($(this).children(0).attr("src") == imagesSrc[i]) {
                actualItem = i;
            }
        }
    });
});

$(".right-arrow").click(function () {
    if (actualItem == (imagesSrc.length - 1)) {
        actualItem = 0;
    } else {
        actualItem++;
    }

    $('#img01').attr("src", imagesSrc[actualItem]);
    $('#caption').html(imagesAlt[actualItem]);

});

$(".left-arrow").click(function () {
    if (actualItem == 0) {
        actualItem = imagesSrc.length - 1;
    } else {
        actualItem--;
    }
    $('#img01').attr("src", imagesSrc[actualItem]);
    $('#caption').html(imagesAlt[actualItem]);
});