$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    /*$("#carouselPause").click(function() {
$(".carousel").carousel({ interval: 2000, pause: "false" });
    })
    $("#carouselPlay").click(function() {
$(".carousel").carousel("cycle");
    })*/

    $("#reserve").click(function() {
        $("#reserveModal").modal('toggle');
    })

    $("#login").click(function() {
        $("#loginModal").modal('toggle');
    })
});
