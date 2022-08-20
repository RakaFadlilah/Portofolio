var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/LaughSmileCtrl/repos', true);
request.onload = function() {
    var data = JSON.parse(this.response);

    var strhtml = ""
    $.each(data, function(i, str) {
        console.log(((str.description == null) ? "&nbsp;" : str.description));
        strhtml += "<div class='card mycard col-lg-4 col-md-5 col-sm-8'>";
        strhtml += "<div class='card-body'>";
        strhtml += "<h5 class='card-title'><a href='" + str.html_url + "' target='_blank'>" + str.name + "</a></h5>";
        strhtml += "<h6 class='card-subtitle'>" + ((str.language == null) ? "&nbsp;" : str.language) + "</h6>";
        strhtml += "<p class='card-text'>" + ((str.description == null) ? "&nbsp;" : str.description) + "</p>";
        strhtml += "</div>";
        strhtml += "</div>";
    });

    $("#mybox").html(strhtml);
}

request.send();

