$(document).ready(function(){
    var numOfSlides = 6;
    for(var i=0 ; i< numOfSlides ; i++) {
        $('<div class="carousel-item"><h2 id="eventHead">Hello'+i+'</h2><p id="eventContent">content'+i+'</p></div>').appendTo('.carousel-inner');
        $('<li data-target="#carousel-events" data-slide-to="'+ i +'"></li>').appendTo('.carousel-indicators')
    }
    $('.carousel-item').first().addClass('active');
    $('#carousel-events').carousel();
});