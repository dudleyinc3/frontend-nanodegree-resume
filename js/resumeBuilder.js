var formattedName = HTMLheaderName.replace("%data%", "John Dudley");

var role = "Front-End Developer";
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
//var skills = ["HTML ", "CSS ", "JavaScript/JQuery ", "WordPress "];
	//$("#main").append(skills);

var bio = {
	"name": "John",
	"role": "Front-End Developer",
	"contacts": {
		"mobile": "206.510.1704",
		"email": "john@sitehypedesigns.com",
		"github": "dudleyinc3",
		"twitter": "@dudleymusic",
		"location": "San Clemente CA/Seattle WA"
},
	"welcomeMessage": "Break the mould, live out loud!",
	"skills": ["HTML ", "CSS ", "JavaScript/JQuery ", "WordPress "],
	"biopic": "http://enpundit.s3.amazonaws.com/wp-content/uploads/2011/12/luxury-bed-hi-can-3.jpg"
};	/*display: function "taking no parameters"*/

var formattedMobile = 
	HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

var formattedEmail =
	HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

var formattedgithub =
	HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedgithub);

/*var formattedTwitter=
	HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);*/

var formattedLocation=
	HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

var formattedbioPic=
	HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedbioPic);

var formattedwelcomeMessage=
	HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedwelcomeMessage);

$("#header").append(HTMLskillsStart);

for (var i = 0; i < bio.skills.length; i++) {
	var formattedskills=
	HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedskills);
};


var work = {
	"jobs": [
	{
		"workEmployer": "SitehypeDesigns",
		"workTitle": "Jr. Developer",
		"workDates": "Sept. 15'-Current",
		"location": "San Clemente, CA",
		"workDescription": "Design/develop websites/wordpress sites and themes"
		}
	]
}

function locationizer(work_obj) {
	var locationArray = [];

	for (jobs in work_obj.jobs){
		var newLocation = work_obj.jobs[jobs].location;
		locationArray.push(newLocation);
	}
	return locationArray;	
}


var formattedworkEmployer =
	HTMLworkEmployer.replace("%data%", work.jobs[0].workEmployer);
	$("#workExperience").append(formattedworkEmployer);
var formattedworkTitle =
	HTMLworkTitle.replace("%data%", work.jobs[0].workTitle);
	$("#workExperience").append(formattedworkTitle);
var formattedworkDates =
	HTMLworkDates.replace("%data%", work.jobs[0].workDates);
	$("#workExperience").append(formattedworkDates);
var formattedworkLocation =
	HTMLworkLocation.replace("%data%", work.jobs[0].location);
	$("#workExperience").append(formattedworkLocation);
var formattedworkDescription =
	HTMLworkDescription.replace("%data%", work.jobs[0].workDescription);
	$("#workExperience").append(formattedworkDescription);



var projects = {
	"project": [
		{
			"title": "SE ConstructionLLC",
			"dates": "Jan 16'",
			"description": "Customized WordPress template", 
			"image": "file://localhost/Users/dudleymusic/Documents/backup/frontend-nanodegree-resume/images/SE 2-Screen Shot 2016-01-23 at 10.18.23 PM.jpg"
			
		},
		{
			"title": "SitehypeDesigns",
			"dates": "Aug. 15'",
			"description": "Customized WordPress template",
			"image": "file://localhost/Users/dudleymusic/Documents/backup/frontend-nanodegree-resume/images/Screen Shot 2016-01-23 at 10.19.08 PM.png",		
		},
		{
			"title": "One Million Lines",
			"dates": "June 15'",
			"description": "Customized Bootstrap, mock site",
			"image": "file://localhost/Users/dudleymusic/Documents/backup/frontend-nanodegree-resume/images/Screen Shot 2016-01-23 at 10.19.59 PM.png"		
		}
	]
}


var formattedprojectTitle =
	HTMLprojectTitle.replace("%data%", projects.project[0].title);
	$("#projects").append(formattedprojectTitle);
var formattedprojectDates =
	HTMLprojectDates.replace("%data%", projects.project[0].dates);
	$("#projects").append(formattedprojectDates);
var formattedprojectDescription =
	HTMLprojectDescription.replace("%data%", projects.project[0].description);
	$("#projects").append(formattedprojectDescription);
var formattedprojectImage =
	HTMLprojectImage.replace("%data%", projects.project[0].image);
	$("#projects").append(formattedprojectImage);


var formattedprojectTitle =
	HTMLprojectTitle.replace("%data%", projects.project[1].title);
	$("#projects").append(formattedprojectTitle);
var formattedprojectDates =
	HTMLprojectDates.replace("%data%", projects.project[1].dates);
	$("#projects").append(formattedprojectDates);
var formattedprojectDescription =
	HTMLprojectDescription.replace("%data%", projects.project[1].description);
	$("#projects").append(formattedprojectDescription);
var formattedprojectImage =
	HTMLprojectImage.replace("%data%", projects.project[1].image);
	$("#projects").append(formattedprojectImage);

var	formattedprojectTitle =
	HTMLprojectTitle.replace("%data%", projects.project[2].title);
	$("#projects").append(formattedprojectTitle);
var formattedprojectDates =
	HTMLprojectDates.replace("%data%", projects.project[2].dates);
	$("#projects").append(formattedprojectDates);
var formattedprojectDescription =
	HTMLprojectDescription.replace("%data%", projects.project[2].description);
	$("#projects").append(formattedprojectDescription);
var formattedprojectImage =
	HTMLprojectImage.replace("%data%", projects.project[2].image);
	$("#projects").append(formattedprojectImage);

var education = {
	"schools": 
	{	
		"name": "Udacity online",
		"degree": "Front-End Developer",
		"dates": "Nov. 15'-Current",
		"location": "Mountain View, CA",
		"major": "Web Developement",
	}	
}
var formattedschoolName =
	HTMLschoolName.replace("%data%", education.schools.name);
	$("#education").append(formattedschoolName);
var formattedschoolDegree =
	HTMLschoolDegree.replace("%data%", education.schools.degree);
	$("#education").append(formattedschoolDegree);
var formattedschoolDates =
	HTMLschoolDates.replace("%data%", education.schools.dates);
	$("#education").append(formattedschoolDates);
var formattedschoolLocation =
	HTMLschoolLocation.replace("%data%", education.schools.location);
	$("#education").append(formattedschoolLocation);
var formattedschoolMajor =
	HTMLschoolMajor.replace("%data%", education.schools.major);
	$("#education").append(formattedschoolMajor);

var education = {
	"schools":
	{
		"name": "Mesa Community College",
		"degree": "Associate/Fine Arts",
		"dates": "Sept 12'-Dec 14'",
		"location": "Mesa AZ",
		"major": "Music/Performance",
	}
}		

var formattedschoolName =
	HTMLschoolName.replace("%data%", education.schools.name);
	$("#education").append(formattedschoolName);
var formattedschoolDegree =
	HTMLschoolDegree.replace("%data%", education.schools.degree);
	$("#education").append(formattedschoolDegree);
var formattedschoolDates =
	HTMLschoolDates.replace("%data%", education.schools.dates);
	$("#education").append(formattedschoolDates);
var formattedschoolLocation =
	HTMLschoolLocation.replace("%data%", education.schools.location);
	$("#education").append(formattedschoolLocation);
var formattedschoolMajor =
	HTMLschoolMajor.replace("%data%", education.schools.major);
	$("#education").append(formattedschoolMajor);

var education = {
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": "Nov 15'- Currently",
			"url": "https://www.udacity.com"
		},
		{
			"title": "HTML CSS3 website in a week",
			"school": "Udemy",
			"dates": "July 15'",
			"url": "https://www.udemy.com/"
		},
		{
			"title": "PHP, Command Line, JavaScript/jQuery, HTML, CSS",
			"school": "Codecadamy",
			"dates": "Dec 14'- April 15'",
			"url": "https://www.codecademy.com"
		},
		{
			"title": "Fundamentals of Web Developement",
			"school": "Lynda",
			"dates": "Feb 15'- March 15'",
			"url": "Lynda.com"
		}
	]
}

$("#education").append(HTMLonlineClasses);
/*var formattedonlineTitle =
	HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
	$("#education").append(formattedonlineCoursesTitle);
var formattedonlineschool =
	HTMLonlineSchool.replace("%data%", education.onlineCourses.school);*/

for (course in education.onlineCourses) {
		var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var schoolTitle = onlineTitle + onlineSchool;
		var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates); 
		var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#data#", education.onlineCourses[course].url)

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(schoolTitle);
		$(".education-entry:last").append(onlineDates);
		$(".education-entry:last").append(onlineURL);
	}
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
 
function inName() {
	var name = window.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() + 
	name[0].slice(1).toLowerCase();	
	return name[0] +" "+ name[1];	
}

var name = $("#name").text();
$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
$("#mapDiv").append(location);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedgithub);
$("#footerContacts").append(formattedLocation);



















