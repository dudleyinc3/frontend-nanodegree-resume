var formattedName = HTMLheaderName.replace("%data%", "John Dudley");

var role = "Front-End Developer";
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
var skills = ["HTML ", "CSS ", "JavaScript/JQuery ", "WordPress "];
	$("#main").append(skills);

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

var formattedGithub =
	HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

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
}
