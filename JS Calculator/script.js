var currentnum = 0;
var lastoperation;
$(document).ready(function() {
    $('.num').click(function() {
        $('#screen').append($(this).text());
    });
    $('#add').click(function() {
        currentnum = Number($('#screen').html());
        lastoperation = "add";
        $('#screen').text(null);
    });
    $('#substract').click(function() {
        currentnum = Number($('#screen').html());
        lastoperation = "substract";
        $('#screen').text(null);
    });
    $('#multiply').click(function() {
        currentnum = Number($('#screen').html());
        lastoperation = "multiply";
        $('#screen').text(null);
    });
    $('#divide').click(function() {
        currentnum = Number($('#screen').html());
        lastoperation = "divide";
        $('#screen').text(null);
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
    });
    $('#clear').click(function() {
        currentnum = 0;
        $('#screen').text(null);
    });
});
