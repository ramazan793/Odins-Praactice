$(document).ready(function() {
    var lastis = "#Menu";
    $('#content').prepend("<img src='logo.gif'>" +
        "<p>The best restautant ever you seen. We have tasty sea foods, italian pizzas and russian pelmeni.</p>");
    $("img").css({
        "position": "relative",
        "width": "700px",
        "left": "50%",
        "margin-left": "-350px"
    });
    $("p, h1").css("text-align", "center");
    $("#content").css("border", "1px solid gray");
    $("#mytab").append("            <li class=\"active\"><a class=\"\" id=\"Menu\">Menu</a></li>");
    $("#mytab").append("            <li><a class=\"\" id=\"Map\">Map</a></li>");
    $("#mytab").append("            <li><a class=\"\" id=\"Contact\">Contact</a></li>");
    $("#content").append("        <div id=\"bar\"><p id=\"tabtext\"></p></div>");
    $("#tabtext").text("Beefsteak, Italian Pizza, Sea-set and Pelmeni with Borsch");

    function toggler(a) {
        $(a).parent().addClass("active");
        $(lastis).parent().removeClass("active");
        var currentid = $(".active").children().attr("id");
        switch (currentid) {
            case "Menu":
                $("#bar").children().text("Beefsteak, Italian Pizza, Sea-set and Pelmeni with Borsch");
                break;
            case "Map":
                $("#bar").children().text("You can find us at Depo Boulevard");
                break;
            case "Contact":
                $("#bar").children().text("Our phone is:8(800)555-35-35");
                break;
        }
        lastis = a;
    }
    $("#Menu, #Map,#Contact").click(function() {
        toggler(this);
    });
});
