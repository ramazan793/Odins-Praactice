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
        $('.snake, .snake img').css({
            "width": mywid + bordersize * 2,
            "height": myhei
        });
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
        $('.snake, .snake img').css({
            "width": mywid + bordersize * 2,
            "height": myhei
        });
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
var snakesize = 4;
var speed = 950; // max 980 if u r human
var losetext = "<h1 id=\"losetext\">You lose</h1>";
var tryagain = "<a id=\"tryagain\" >try again</a>";
var s_wid = $('#gamescreen').width();
var mywid = s_wid * 1 / size - bordersize * 2;
var myhei = mywid;
var newgame = false;
var fixrate = 0.041;
$(document).ready(function() {
    function move(a) {

        var currentbox = $(grid[a.x][a.y].get());
        var nextbox = $(grid[a.x + a.xd][a.y + a.yd].get());
        var a_dom = $(a.get());

        if (nextbox.find('img').attr('id') == 'food') { //FOOOOOOD
            nextbox.find('img').attr('id', 'food').remove();
            newBody();
            food();
        }

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
                    break;
            }
            a.direction = direction;

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
        $(grid[a.x][a.y].get()).append(a.get());

    }
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

    function startingSnake() {
        snake.push(new Snake(19, 19));
        snake.push(new SnakeBody(18, 19));
        snake.push(new SnakeBody(17, 19));
        snake.push(new SnakeBody(16, 19));
        $(grid[16][19].get()).append(snake[3].get());
        $(grid[17][19].get()).append(snake[2].get());
        $(grid[18][19].get()).append(snake[1].get());
        $(grid[19][19].get()).append(snake[0].get());
    }

    function newBody() {
        var lastsnake = snake[snakesize - 1];

        var newsnake = new SnakeBody(lastsnake.x - lastsnake.xd, lastsnake.y - lastsnake.yd);

        $(lastsnake.get()).find('img').attr('src', 'Assets/snakebody.png');
        $(newsnake.get()).find('img').attr('src', 'Assets/snaketale.png');

        newsnake.xd = lastsnake.xd;
        newsnake.yd = lastsnake.yd;

        newsnake.direction = lastsnake.direction;
        switch (newsnake.direction) {
            case 'top':
                $(newsnake.get()).find('img').css('transform','rotate(-90deg)');
                break;
            case 'bottom':
                $(newsnake.get()).find('img').css('transform','rotate(90deg)');
                break;
            case 'left':
                $(newsnake.get()).find('img').css('transform','rotate(180deg)');
                break;
            default:
                break;

        }

        snake.push(newsnake);
        $(grid[lastsnake.x - lastsnake.xd][lastsnake.y - lastsnake.yd].get()).append(snake[snakesize].get());
        snakesize++;

        $('.snake, .snake img').css({
            "width": mywid + bordersize * 2 + mywid * fixrate,
            "height": myhei + mywid * fixrate
        });

    }

    function food() {
        var randomx = Math.round(Math.random() * 39);
        var randomy = Math.round(Math.random() * 39);
        var food = document.createElement('img');
        $(grid[randomx][randomy].get()).append(food);
        $(food).attr('src', 'Assets/apple.png');
        $(food).attr('id', 'food');
        $(food).css({
            "width": mywid + bordersize * 2 + mywid * fixrate,
            "height": myhei + mywid * fixrate
        })
    }

    function field() {
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                grid[x][y] = new Square(x, y);
                div = grid[x][y].get();
                $(div).addClass('square');
                $('#gamescreen').append(div);
                if (x == 0 || y == 0 || x == 39 || y == 39)
                    $(div).css('background-color', 'red');
            }
        }
        startingSnake();
        $('.snake, .snake img').css({
            "width": mywid + bordersize * 2 + mywid * fixrate,
            "height": myhei + mywid * fixrate
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
        $('#window').append(losetext);
        $('#window').append(tryagain);
        $('#window').click(function() {
            newGame();
        });

    }

    var s_wid = $('#gamescreen').width();
    var mywid = s_wid * 1 / size - bordersize * 2;
    var myhei = mywid;
    var newgame = false;

    function newGame() {
        this.direction = 'right';
        this.xd = 1;
        this.yd = 0;
        for (var j = this.snakesize - 1; j >= 0; j--) {
            this.snake[j].get().remove();
        }
        this.snakesize = 4;
        this.snake = [];
        $('.square').find('img').attr('id', 'food').remove();
        $('#window').hide();
        startingSnake();
        game();
        $('.snake, .snake img').css({
            "width": mywid + bordersize * 2 + mywid * fixrate,
            "height": myhei + mywid * fixrate
        });
        $('.checkbox').removeClass('checkbox');
    }

    function game() {
        $(snake[snakesize - 1].get()).find('img').attr("src", "Assets/snaketale.png");
        var timerId = setInterval(function() {
            if (snake[0].x == 39 || snake[0].y == 39 || snake[0].x == 0 || snake[0].y == 0) {
                $('#window').show();
                newgame = true;
                clearInterval(timerId);
            } else {
                for (var j = 0; j < snakesize; j++) {
                    move(snake[j]);
                }
            }
        }, 1000 - speed);
        food();
    }

    function render() {
        field();
        game();
    }
    if (newgame) {
        newGame();
    } else {
        render();
    }
    newBody();
});
