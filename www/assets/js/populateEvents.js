$(document).ready(function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            populateContent(this);
        }
    };
    xhttp.open("GET","assets/events.xml", true);
    xhttp.send();
});

function populateContent(xml) {
    xmlDoc = xml.responseXML;
    var events = xmlDoc.getElementsByTagName("event");
    var numOfSlides = events.length;
    for (var i = 0; i < numOfSlides; i++) {
        if(events[i].getElementsByTagName("imagePath1")[0].childNodes[0].nodeValue !== "none"){
            $('<div class="carousel-item">' +
                '<img class="eventImage" src="'+events[i].getElementsByTagName("imagePath1")[0].childNodes[0].nodeValue+'">'+
                '<img class="eventImage" src="'+events[i].getElementsByTagName("imagePath2")[0].childNodes[0].nodeValue+'">'+
                '<h2 id="eventHead' + i + '">'+events[i].getElementsByTagName("title")[0].childNodes[0].nodeValue+'</h2>' +
                '<p id="eventContent' + i + '">'+events[i].getElementsByTagName("content")[0].childNodes[0].nodeValue+'</p>' +
                '</div>').appendTo('.carousel-inner');
        }else{
            $('<div class="carousel-item">' +
                '<h2 style="margin: auto; float:none;" id="eventHead' + i + '">'+events[i].getElementsByTagName("title")[0].childNodes[0].nodeValue+'</h2>' +
                '<p  style="margin: auto; float: none;" id="eventContent' + i + '">'+events[i].getElementsByTagName("content")[0].childNodes[0].nodeValue+'</p>' +
                '</div>').appendTo('.carousel-inner');
        }

    }
    $('.carousel-item').first().addClass('active');
    $('#carousel-events').carousel();
}