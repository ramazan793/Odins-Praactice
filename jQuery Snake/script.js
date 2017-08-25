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
class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.block = document.createElement('div');
    }
    get() {
        return this.block;
    }
}
class Snake {
    constructor(x, y) { // snakehead constructor
        this.x = x;
        this.y = y;
        this.divpic = document.createElement('div');
        this.pic = "<img src=\"assets/snakehead.png\" alt=\"\">";
        $(this.divpic).append(this.pic);
        $(this.divpic).addClass('snakehead');
    }
    get(){
        return this.divpic;
    }
}
class SnakeBody {
    constructor(x, y) { // snakehead constructor
        this.x = x;
        this.y = y;
        this.divpic = document.createElement('div');
        this.pic = "<img src=\"assets/snakebody.png\" alt=\"\">";
        $(this.divpic).append(this.pic);
        $(this.divpic).addClass('snakehead');
    }
    get(){
        return this.divpic;
    }
}
$(document).ready(function() {
    var size = 40;
    var bordersize = 1;
    var s_wid = $('#gamescreen').width();
    var mywid = s_wid * 1 / size - bordersize * 2 + "px";
    var myhei = mywid;
    var grid = matrixArray(40, 40);
    var div;

    function field() {
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                grid[x][y] = new Square(x, y);
                div = grid[x][y].get();
                $(div).addClass('square');
                $('#gamescreen').append(div);
                if (x == 18 && y == 19) {
                    $(div).append(new SnakeBody(19,19).get());
                }
                if (x == 19 && y == 19) {
                    $(div).append(new Snake(19,19).get());
                }
            }
        }
        $('.square').css({
            "border": bordersize + "px solid gray",
            "width": mywid,
            "height": myhei
        });
    }

    function render() {
        field();
    }

    render();

});
