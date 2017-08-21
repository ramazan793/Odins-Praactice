$(document).ready(function() {
    var s_wid = $('#gamescreen').width();
    var size = 40;
    var bordersize = 1;
    var mywid = s_wid * 1 / size - bordersize * 2 + "px";
    var myhei = mywid;
    console.log(s_wid + " " + mywid);
    for (var i = 1; i <= size * size; i++) {
        var div = document.createElement('div');
        $(div).addClass('square');
        $('#gamescreen').append(div);
    }
    $('.square').css({
        "border":bordersize+"px solid gray",
        "width": mywid,
        "height": myhei
    });
});
