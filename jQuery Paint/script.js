$(document).ready(function() {
    var s_wid = $(document).width();
    var s_hei = $(document).height();
    var size = 16;
    var bordersize = 1;
    var mywid = s_wid * 1 / size - bordersize * 2 + "px";
    var myhei = s_wid * 1 / size - bordersize * 2 + "px";
    var isDown = false;
    $('#size-button').click(function() {
        var size = prompt("Введите размер сетки", '');
        var mywid = s_wid * 1 / size - bordersize * 2 + "px";
        var myhei = s_wid * 1 / size - bordersize * 2 + "px";
        $('.square').remove();
        for (var i = 0; i < size * size; i++) {
            var div = document.createElement("div");
            $(div).attr("class", "square")
            $('.wrapper').append(div);
        }
        $('.square').css({
            "border": bordersize + "px solid gray",
            "width": mywid,
            "height": myhei
        });
        $(".square").mousedown(function() {
            isDown = true;
        });
        $(".square").mouseup(function() {
            isDown = false;
        });
        $(".square").hover(function() {
            if (isDown == true) {
                $(this).css("background-color", "blue")
            }
        });

    });
    for (var i = 0; i <= size * size; i++) {

        var div = document.createElement("div");
        $(div).attr("class", "square")
        $(".square").css({
            "border": bordersize + "px solid gray",
            "width": mywid,
            "height": myhei
        })
        $(".square").mousedown(function() {
            isDown = true;
        });
        $(".square").mouseup(function() {
            isDown = false;
        });
        $(".square").hover(function() {
            if (isDown == true) {
                $(this).css("background-color", "blue")
            }
        });
        $('.wrapper').append(div);
    }
});
