var formattedName = HTMLheaderName.replace("%data%", "John Dudley");

var role = "Front-End Developer";
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
var skills = ["HTML ", "CSS ", "JavaScript/JQuery ", "WordPress "];
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
		"link": "http://sitehypedesigns.com",
		"workEmployer": "SitehypeDesigns",
		"workTitle": "Jr. Developer",
		"workDates": "Sept. 15'-Current",
		"location": "San Clemente, CA",
		"workDescription": "Design/develop websites/wordpress sites and themes"
		}
	]
}

for (job in work.jobs) {
	var workLink = HTMLworkLink.replace("%data%", work.jobs[job].link);
	var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].workEmployer);
	var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].workTitle);
	var workDates = HTMLworkDates.replace("%data%", work.jobs[job].workDates);
	var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location); 
	var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);

	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(workLink);
	$(".work-entry:last.work-link").append(workEmployer);
	$(".work-entry:last").append(workEmployer);
	$(".work-entry:last").append(workTitle);
	$(".work-entry:last").append(workDates);
	$(".work-entry:last").append(workLocation);
	$(".work-entry:last").append(workDescription);
}

function locationizer(work_obj) {
	var locationArray = [];

	for (jobs in work_obj.jobs){
		var newLocation = work_obj.jobs[jobs].location;
		locationArray.push(newLocation);
	}
	return locationArray;	
}


	/*var formattedworkEmployer =
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
	*/


var projects = {
	"project": [
		{
			"title": "SE ConstructionLLC",
			"dates": "Jan 16'",
			"description": "Customized WordPress template", 
			"image": "images/SE 2-Screen Shot 2016-01-23 at 10.18.23 PM.jpg",
			"link": "http://seconstructionllc.com/"			
		},
		{
			"title": "SitehypeDesigns",
			"dates": "Aug. 15'",
			"description": "Customized WordPress template",
			"image": "images/Screen Shot 2016-01-23 at 10.19.08 PM.png",
			"link": "http://sitehypedesigns.com/"
		},
		{
			"title": "One Million Lines",
			"dates": "June 15'",
			"description": "Customized Bootstrap, mock site",
			"image": "images/Screen Shot 2016-01-23 at 10.19.59 PM.png",
			"link": "https://github.com/dudleyinc3/million-lines" 
		}
	]
}

//projects.display = function(){


for (project in projects.project) {
	var projectLink = HTMLprojectLink.replace("%data%", projects.project[project].link);
	var projectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
	var projectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
	var projectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description); 
	var projectImage = HTMLprojectImage.replace("%data%", projects.project[project].image);
    
    
      

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(projectLink);
    $(".project-entry:last.project-link").append(projectTitle);
    $(".project-entry:last").append(projectTitle);
    $(".project-entry:last").append(projectDates);
    $(".project-entry:last").append(projectDescription);
    $(".project-entry:last").append(projectImage);
    }
//projects.display();


/*$("#projects").append(HTMLprojectStart);

	var formattedprojectLink =
		HTMLprojectLink.replace("%data%", projects.project[0].link);
		$("#projects").append(formattedprojectLink);
	var formattedprojectTitle =
		HTMLprojectTitle.replace("%data%", projects.project[0].title);
		$("#projects a:first").append(formattedprojectTitle);
	var formattedprojectDates =
		HTMLprojectDates.replace("%data%", projects.project[0].dates);
		$("#projects").append(formattedprojectDates);
	var formattedprojectDescription =
		HTMLprojectDescription.replace("%data%", projects.project[0].description);
		$("#projects").append(formattedprojectDescription);
	var formattedprojectImage =
		HTMLprojectImage.replace("%data%", projects.project[0].image);
		$("#projects").append(formattedprojectImage);

	var formattedprojectLink =
		HTMLprojectLink.replace("%data%", projects.project[1].link);
		$("#projects").append(formattedprojectLink);
	var formattedprojectTitle =
		HTMLprojectTitle.replace("%data%", projects.project[1].title);
		$("#projects a:nth-of-type(2)").append(formattedprojectTitle);
	var formattedprojectDates =
		HTMLprojectDates.replace("%data%", projects.project[1].dates);
		$("#projects").append(formattedprojectDates);
	var formattedprojectDescription =
		HTMLprojectDescription.replace("%data%", projects.project[1].description);
		$("#projects").append(formattedprojectDescription);
	var formattedprojectImage =
		HTMLprojectImage.replace("%data%", projects.project[1].image);
		$("#projects").append(formattedprojectImage);

	var formattedprojectLink =
		HTMLprojectLink.replace("%data%", projects.project[2].link);
		$("#projects").append(formattedprojectLink);
	var	formattedprojectTitle =
		HTMLprojectTitle.replace("%data%", projects.project[2].title);
		$("#projects a:nth-of-type(3)").append(formattedprojectTitle);
	var formattedprojectDates =
		HTMLprojectDates.replace("%data%", projects.project[2].dates);
		$("#projects").append(formattedprojectDates);
	var formattedprojectDescription =
		HTMLprojectDescription.replace("%data%", projects.project[2].description);
		$("#projects").append(formattedprojectDescription);
	var formattedprojectImage =
		HTMLprojectImage.replace("%data%", projects.project[2].image);
		$("#projects").append(formattedprojectImage);
*/


var education = {
	"schools": [
		{
			"link": "https://www.mesacc.edu",
			"name": "Mesa Community College",
			"degree": "Associate/Fine Arts",
			"dates": "Sept 12'-Dec 14'",
			"location": "Mesa AZ",
			"major": "Music/Performance",
		},
		{	
			"link": "https://www.udacity.com",
			"name": "Udacity online",
			"degree": "Front-End Developer",
			"dates": "Nov. 15'-Current",
			"location": "Mountain View, CA",
			"major": "Web Developement",
		}
	]
}	
	

$("#education").append(HTMLphysicalClasses);	

for (course in education.schools) {
	var schoolLink = HTMLschoolLink.replace("%data%", education.schools[course].link);
	var schoolName = HTMLschoolName.replace("%data%", education.schools[course].name);
	var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[course].degree);
	var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[course].major);
	var schoolDates = HTMLschoolDates.replace("%data%", education.schools[course].dates); 
	var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[course].location);

	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(schoolLink);
	$(".education-entry:last.schools-link").append(schoolName);
	$(".education-entry:last").append(schoolName);
	$(".education-entry:last").append(schoolDegree);
	$(".education-entry:last").append(schoolMajor);
	$(".education-entry:last").append(schoolDates);
	$(".education-entry:last").append(schoolLocation);
	
}

/*var formattedschoolName =
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
	$("#education").append(formattedschoolMajor);*/

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
			"url": "https://www.lynda.com"
		}
	]
}

$("#education").append(HTMLonlineClasses);

for (course in education.onlineCourses) {
	var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	var schoolTitle = onlineTitle + onlineSchool;
	var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates); 
	var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(onlineURL);
	$(".education-entry:last.online-url").append(schoolTitle);
	$(".education-entry:last").append(schoolTitle);
	$(".education-entry:last").append(onlineDates);
	
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
