
var HTMLheaderName = '<h1 id="name">%data%</h1>';

var HTMLheaderRole = "<span>%data%</span><hr>";

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';

var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';

var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';

var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';

var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';

var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';

var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';

var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';

var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';

var HTMLworkLink = '<a href="%data%" class="work-entry" target="_blank">';

var HTMLworkEmployer = "%data%";

var HTMLworkTitle = " - %data%";

var HTMLworkDates = '<div class="date-text">%data%</div>';

var HTMLworkLocation = '<div class="location-text">%data%</div>';

var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = '<div class="project-entry"></div>';

var HTMLprojectLink = '<a href="%data%" class="project-entry" target="_blank">';

var HTMLprojectTitle = "<br>%data%";

var HTMLprojectDates = '<div class="date-text">%data%</div>';

var HTMLprojectDescription = "<p><br>%data%</p>";

var HTMLprojectImage = '<img src="%data%">';

var HTMLphysicalClasses = "<h3>Physical Classes</h3>";

var HTMLschoolStart = '<div class="education-entry"></div>';

var HTMLschoolLink = '<a href="%data%" class="education-entry" target="_blank">';

var HTMLschoolName = "<br>%data%";

var HTMLschoolDegree = "%data%";

var HTMLschoolDates = '<div class="date-text">%data%</div>';

var HTMLschoolLocation = '<div class="location-text">%data%</div>';

var HTMLschoolMajor = '<div class="major-text">%data%</div>';

var HTMLonlineClasses = "<h3>Online Classes</h3>";

var HTMLonlineURL = '<a href="%data%" class="education-entry" target="_blank">';

var HTMLonlineTitle = "<br>%data%";

var HTMLonlineSchool = " - %data%</a>";

var HTMLonlineDates = '<div class="date-text">%data%</div>';

var internationalizeButton = "<button>Internationalize</button>";

var googleMap = '<div id="map"></div>';

$(document).ready(function() {
    $("button").click(function() {
        var a = inName() || function() {};
        $("#name").html(a);
    });
});

clickLocations = [];

function logClicks(a, b) {
    clickLocations.push({
        x: a,
        y: b
    });
    console.log("x location: " + a + "; y location: " + b);
}

$(document).click(function(a) {});

var map;

function initializeMap() {
    var a;
    var b = {
        disableDefaultUI: true
    };
    map = new google.maps.Map(document.querySelector("#map"), b);
    function c() {
        var a = [];
        a.push(bio.contacts.location);
        work.jobs.forEach(function(b) {
            a.push(b.location);
        });
        return a;
    }
    function d(a) {
        var b = a.geometry.location.lat();
        var c = a.geometry.location.lng();
        var d = a.formatted_address;
        var e = window.mapBounds;
        var f = new google.maps.Marker({
            map: map,
            position: a.geometry.location,
            title: d
        });
        var g = new google.maps.InfoWindow({
            content: d
        });
        google.maps.event.addListener(f, "click", function() {
            g.open(map, f);
        });
        e.extend(new google.maps.LatLng(b, c));
        map.fitBounds(e);
        map.setCenter(e.getCenter());
    }
    function e(a, b) {
        if (b == google.maps.places.PlacesServiceStatus.OK) d(a[0]);
    }
    function f(a) {
        var b = new google.maps.places.PlacesService(map);
        a.forEach(function(a) {
            var c = {
                query: a
            };
            b.textSearch(c, e);
        });
    }
    window.mapBounds = new google.maps.LatLngBounds();
    a = c();
    f(a);
}

window.addEventListener("load", initializeMap);

window.addEventListener("resize", function(a) {
    map.fitBounds(mapBounds);
});
