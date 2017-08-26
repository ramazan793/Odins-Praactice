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
        this.xd = 1;
        this.yd = 0;
        this.x = x;
        this.y = y;
        this.direction = 'right';
        this.divpic = document.createElement('div');
        this.pic = "<img src=\"Assets/snakehead.png\" alt=\"\">";
        $(this.divpic).append(this.pic);
        $(this.divpic).addClass('snake');
    }
    get() {
        return this.divpic;
    }
}
class SnakeBody {
    constructor(x, y) { // snakehead constructor
        this.xd = 1;
        this.yd = 0;
        this.x = x;
        this.y = y;
        this.direction = 'right';
        this.divpic = document.createElement('div');
        this.pic = "<img src=\"Assets/snakebody.png\" alt=\"\">";
        $(this.divpic).append(this.pic);
        $(this.divpic).addClass('snake');
    }
    get() {
        return this.divpic;
    }
}



var size = 40;
var bordersize = 0;
var grid = matrixArray(40, 40);
var snake = [];
var div;
var direction = 'right';
var xd = 1,
    yd = 0;
var snakesize = 3;
var speed = 950; // max 980 if u r human
$(document).ready(function() {

    function move(a) {
        var currentbox = $(grid[a.x][a.y].get());
        var nextbox = $(grid[a.x + a.xd][a.y + a.yd].get());
        var a_dom = $(a.get());
        if (nextbox.attr('class') == 'square checkbox') { // крутит текстурки при поворотах(АНИМАЦИЯ)
            switch (nextbox.attr('id')) {
                case 'top':
                    if (a != snake[snakesize - 1]) { //body
                        a_dom.find('img').attr('src', 'Assets/snaketwist.png');
                        if (a.direction == "right") {
                            a_dom.find('img').css("transform", "rotate(-180deg)");
                        } else if (a.direction == "left") {
                            a_dom.find('img').css("transform", "rotate(-90deg)");
                        }
                    } else {
                        a_dom.find('img').css("transform", "rotate(-90deg)"); // tale
                    }
                    break;
                case 'right':
                    if (a != snake[snakesize - 1]) { //body
                        a_dom.find('img').attr('src', 'Assets/snaketwist.png');
                        if (a.direction == "top") {
                            a_dom.find('img').css("transform", "rotate(0deg)");
                        } else if (a.direction == "bottom") {
                            a_dom.find('img').css("transform", "rotate(-90deg)");
                        }
                    } else {
                        a_dom.find('img').css("transform", "rotate(0deg)"); // tale
                    }
                    break;
                case 'bottom':
                    if (a != snake[snakesize - 1]) { //body
                        a_dom.find('img').attr('src', 'Assets/snaketwist.png');
                        if (a.direction == "right") {
                            a_dom.find('img').css("transform", "rotate(90deg)");
                        } else if (a.direction == "left") {
                            a_dom.find('img').css("transform", "rotate(0deg)");
                        }
                    } else {
                        a_dom.find('img').css("transform", "rotate(90deg)"); //tale
                    }
                    break;
                case 'left':
                    if (a != snake[snakesize - 1]) { //body
                        a_dom.find('img').attr('src', 'Assets/snaketwist.png');
                        if (a.direction == "top") {
                            a_dom.find('img').css("transform", "rotate(90deg)");
                        } else if (a.direction == "bottom") {
                            a_dom.find('img').css("transform", "rotate(180deg)");
                        }
                    } else {
                        a_dom.find('img').css("transform", "rotate(180deg)"); // tale
                    }
                    break;
                default:

            }


        }

        if (a == snake[0] || currentbox.attr("class") == 'square checkbox') { // меняет направление || 'поворотник'+ меняет текстурки
            if (currentbox.attr('id') == 'top') {
                a.xd = 0;
                a.yd = -1;
                if (a != snake[0] && a != snake[snakesize - 1]) {
                    a_dom.find('img').attr('src', 'Assets/snakebody.png');
                    a_dom.find('img').css("transform", "rotate(-90deg)");
                } else {
                    a_dom.find('img').css("transform", "rotate(-90deg)");
                }
            }
            if (currentbox.attr('id') == 'right') {
                a.xd = 1;
                a.yd = 0;
                if (a != snake[0] && a != snake[snakesize - 1]) {
                    a_dom.find('img').attr('src', 'Assets/snakebody.png');
                    a_dom.find('img').css("transform", "rotate(0deg)");
                } else {
                    a_dom.find('img').css("transform", "rotate(0deg)");
                }
            }
            if (currentbox.attr('id') == 'bottom') {
                a.xd = 0;
                a.yd = 1;
                if (a != snake[0] && a != snake[snakesize - 1]) {
                    a_dom.find('img').attr('src', 'Assets/snakebody.png');
                    a_dom.find('img').css("transform", "rotate(-90deg)");
                } else {
                    a_dom.find('img').css("transform", "rotate(90deg)");
                }
            }
            if (currentbox.attr('id') == 'left') {
                a.xd = -1;
                a.yd = 0;
                if (a != snake[0] && a != snake[snakesize - 1]) {
                    a_dom.find('img').attr('src', 'Assets/snakebody.png');
                    a_dom.find('img').css("transform", "rotate(0deg)");
                } else {
                    a_dom.find('img').css("transform", "rotate(-180deg)");
                }
            }
        }
        if (a == snake[snakesize - 1]) {
            currentbox.attr('id', '');
            currentbox.removeClass('checkbox');
        }
        a.x += a.xd;
        a.y += a.yd;
        a.direction = direction;
        $(grid[a.x][a.y].get()).append(a.get());

    }

    var s_wid = $('#gamescreen').width();
    var mywid = s_wid * 1 / size - bordersize * 2;
    var myhei = mywid;
    var losetext = "<h1 id=\"losetext\">You lose</h1>";
    var tryagain = "<a id=\"tryagain\" href=\"\">try again</a>";
    var newgame = false;
    $(window).keydown(function(e) {
        var code = e.which; //38 39 40 37
        switch (code) {
            case 38:
                direction = "top";
                xd = 0;
                yd = -1;
                $(grid[snake[0].x][snake[0].y].get()).addClass('checkbox').attr('id', direction); // создаётся чек-бокс, бокс поворотник.
                break;
            case 39:
                direction = "right";
                xd = 1;
                yd = 0;
                $(grid[snake[0].x][snake[0].y].get()).addClass('checkbox').attr('id', direction);
                break;
            case 40:
                direction = "bottom";
                xd = 0;
                yd = 1;
                $(grid[snake[0].x][snake[0].y].get()).addClass('checkbox').attr('id', direction);
                break;
            case 37:
                direction = "left";
                xd = -1;
                yd = 0;
                $(grid[snake[0].x][snake[0].y].get()).addClass('checkbox').attr('id', direction);
                break;
            default:
                break;
        }
    });

    function field() {
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                grid[x][y] = new Square(x, y);
                div = grid[x][y].get();
                $(div).addClass('square');
                $('#gamescreen').append(div);
                snake.push(new Snake(19, 19));
                snake.push(new SnakeBody(18, 19));
                snake.push(new SnakeBody(17, 19));
                if (x == 17 && y == 19) {
                    $(div).append(snake[2].get());
                }
                if (x == 18 && y == 19) {
                    $(div).append(snake[1].get());
                }
                if (x == 19 && y == 19) {
                    $(div).append(snake[0].get());
                }
            }
        }
        $('.snake, .snake img').css({
            "width": mywid + bordersize * 2,
            "height": myhei
        });
        $('.square').css({
            "border": bordersize + "px solid gray",
            "width": mywid,
            "height": myhei
        });

        $('#window').css({
            'top': "+=" + (s_wid * .5 - 50) + "px",
            'background-color': 'lightgray',
            'opacity': '0.65',
            'left': "-=200px"
        })
        $('#window').hide();
        $('#tryagain').click(function() {
            newGame();
        });
    }

    function newGame() {
        var direction = 'right';
        var xd = 1,
            yd = 0;
        var snakesize = 3;
        newgame = true;
    }

    function render() {
        field();
        $(snake[snakesize - 1].get()).find('img').attr("src", "Assets/snaketale.png");
        var timerId = setInterval(function() {
            if (snake[0].x != 39 && snake[0].y != 39) {
                for (var j = 0; j < snakesize; j++) {
                    move(snake[j]);
                }
            } else {
                //alert("YOU LOSE");
                $('#window').show();
                $('#window').append(losetext);
                $('#window').append(tryagain);
                clearInterval(timerId);
            }
        }, 1000 - speed);

    }
    if (newgame) {

    } else {
        render();
    }
    // $(grid[20][19].get()).append(snake[0].get());

});
