var currentnum = 0;
var lastoperation;
var opnum = 0;
var mode = false;
$(document).ready(function() {
    $('.num').click(function() {
        if (mode) {
            $('#screen').empty();
            $('#screen').append($(this).text());
            mode = false;
        } else {
            $('#screen').append($(this).text());
        }
    });
    $('#add,#substract,#multiply,#divide').click(function() {
        if (opnum > 0) {
            mode = true;
            switch (lastoperation) {
                case "add":
                    currentnum += Number($('#screen').html());
                    $('#screen').text(currentnum);
                    lastoperation = "add";
                    break;
                case "substract":
                    currentnum -= Number($('#screen').html());
                    $('#screen').text(currentnum);
                    lastoperation = "substract";
                    break;
                case "multiply":
                    currentnum *= Number($('#screen').html());
                    $('#screen').text(currentnum);
                    lastoperation = "multiply";
                    break;
                case "divide":
                    currentnum /= Number($('#screen').html());
                    $('#screen').text(currentnum);
                    lastoperation = "divide";
                    break;
                default:
                    break;
            }
            lastoperation = $(this).attr("id");
        } else {
            currentnum = Number($('#screen').html());
            lastoperation = $(this).attr("id");
            $('#screen').text(null);
            mode = false;
        }
        opnum++;
    });
    $('#equality').click(function() {
        switch (lastoperation) {
            case "add":
                currentnum += Number($('#screen').html());
                $('#screen').text(currentnum);
                lastoperation = 0;
                break;
            case "substract":
                currentnum -= Number($('#screen').html());
                $('#screen').text(currentnum);
                lastoperation = 0;
                break;
            case "multiply":
                currentnum *= Number($('#screen').html());
                $('#screen').text(currentnum);
                lastoperation = 0;
                break;
            case "divide":
                currentnum /= Number($('#screen').html());
                $('#screen').text(currentnum);
                lastoperation = 0;
                break;
            default:
                break;
        }
        opnum = 0;
        mode = false;
    });
    $('#clear').click(function() {
        currentnum = 0;
        mode = false;
        opnum = 0;
        lastoperation = null;
        $('#screen').text(null);
    });

});
