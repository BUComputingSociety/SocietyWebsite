$(document).ready(function(){

    $(function(){
        $("#about").load("about.html");
        $("#committee").load("committee.html");
        $("#events").load("events.html");
        $("#contact").load("contactUs.html");
    });

    $("#sectionNav").find("a").on('click', function (event) {
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            if (this.hash === "#home") {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
            } else if(this.hash ==="#contact") {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000);
            }else{
                $('html, body').animate({
                    scrollTop: ($(hash).offset().top) - (($(window).height()) / 4)
                }, 1000);
            }
        }
    });

});