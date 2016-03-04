
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

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
var HTMLworkEmployer = '%data%';
var HTMLworkTitle = ' - %data%';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectLink = '<a href="%data%" class="project-entry" target="_blank">';
var HTMLprojectTitle = '<br>%data%';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';


var HTMLphysicalClasses = '<h3>Physical Classes</h3>';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolLink = '<a href="%data%" class="education-entry" target="_blank">';
var HTMLschoolName = '<br>%data%';
var HTMLschoolDegree = '%data%';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div class="major-text">%data%</div>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineURL = '<a href="%data%" class="education-entry" target="_blank">';
var HTMLonlineTitle = '<br>%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';


var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}


$(document).click(function(loc) {
  //logClicks(loc.pageX, loc.pageY)
});


var map;    

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {

    var locations = [];

    locations.push(bio.contacts.location);

   
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  function createMapMarker(placeData) {

    
    var lat = placeData.geometry.location.lat();  
    var lon = placeData.geometry.location.lng();  
    var name = placeData.formatted_address;   
    var bounds = window.mapBounds;            

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map, marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
  
    map.fitBounds(bounds);
  
    map.setCenter(bounds.getCenter());
  }


  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }


  function pinPoster(locations) {

    var service = new google.maps.places.PlacesService(map);

    
      locations.forEach(function(place){
      var request = {
        query: place
      };

      service.textSearch(request, callback);
    });
  }

  window.mapBounds = new google.maps.LatLngBounds();
  locations = locationFinder();
  pinPoster(locations);

}


window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
