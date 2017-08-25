function matrixArray(rows, columns) {
    var arr = new Array();
    for (var i = 0; i < columns; i++) {
        arr[i] = new Array();
        for (var j = 0; j < rows; j++) {
            arr[i][j] = i + j + 1;
        }
    }
    return arr;
}
class Square{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.block = document.createElement('div');
    }
    get(){
        return this.block;
    }
}

$(document).ready(function() {
    var size = 40;
    var bordersize = 1;
    var s_wid = $('#gamescreen').width();
    var mywid = s_wid * 1 / size - bordersize * 2 + "px";
    var myhei = mywid;
    var grid = matrixArray(40, 40);

    function field() {
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                grid[x][y] = new Square(x, y);
                var div = grid[x][y].get();
                $(div).addClass('square');
                $('#gamescreen').append(div);
                if (x == 19 && y == 19) {
                    $(div).append("&Omicron;");
                }
            }
        }
        $('.square').css({
            "border": bordersize + "px solid gray",
            "width": mywid,
            "height": myhei,
            "text-align":"center"
        });
    }

    function render() {
        field();
    }

    render();

});
