function move() {
    var el = $('.littleBlock'),
        width = el.parent().width() - el.width();

    el.animate({left: width}, 2000, function(){
        el.animate({left: 0}, 2000, move);
    });
}

move();