var bio = {    name: "John",    role: "Front-End Developer",    contacts: {        mobile: "206.510.1704",        email: "john@sitehypedesigns.com",        github: "dudleyinc3",        twitter: "@dudleymusic",        location: "San Clemente CA/Seattle WA"    },    welcomeMessage: "Break the mould, live out loud!",    skills: [ "HTML", "CSS", "JavaScript/JQuery", "WordPress" ],    biopic: "http://enpundit.s3.amazonaws.com/wp-content/uploads/2011/12/luxury-bed-hi-can-3.jpg"};bio.display = function() {    var a = HTMLheaderName.replace("%data%", "John Dudley");    var b = HTMLheaderRole.replace("%data%", "Front-End Developer");    var c = HTMLmobile.replace("%data%", bio.contacts.mobile);    var d = HTMLemail.replace("%data%", bio.contacts.email);    var e = HTMLgithub.replace("%data%", bio.contacts.github);    var f = HTMLlocation.replace("%data%", bio.contacts.location);    var g = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);    var h = HTMLbioPic.replace("%data%", bio.biopic);    $("#topContacts").append(c + d, e, f);    $("#footerContacts").append(c + d, e, f);    $("#header").prepend(b).prepend(a).append(g, h);    $("#header").append(HTMLskillsStart);    for (skill in bio.skills) {        var i = HTMLskills.replace("%data%", bio.skills[skill]);        $("#skills").append(i);    }};bio.display();var work = {    jobs: [ {        employer: "SitehypeDesigns",        title: "Jr. Developer",        dates: "Sept. 15'- Current",        location: "San Clemente, CA",        description: "Design/develop websites/wordpress sites and themes",        link: "http://sitehypedesigns.com"    } ]};work.display = function() {    for (job in work.jobs) {        $("#workExperience").append(HTMLworkStart);        var a = HTMLworkLink.replace("%data%", work.jobs[job].link);        var b = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);        var c = HTMLworkTitle.replace("%data%", work.jobs[job].title);        var d = HTMLworkDates.replace("%data%", work.jobs[job].dates);        var e = HTMLworkLocation.replace("%data%", work.jobs[job].location);        var f = HTMLworkDescription.replace("%data%", work.jobs[job].description);        $(".work-entry:last").append(a + b, c, d, e, f);    }};work.display();function locationizer(a) {    var b = [];    for (jobs in a.jobs) {        var c = a.jobs[jobs].location;        b.push(c);    }    return b;}var projects = {    project: [ {        title: "SE ConstructionLLC",        dates: "Jan 16'",        description: "Customized WordPress template",        images: ["images/SE 2-Screen Shot 2016-01-23 at 10.18.23 PM.jpg"],        link: "http://seconstructionllc.com/"    }, {        title: "SitehypeDesigns",        dates: "Aug. 15'",        description: "Customized WordPress template",        images: ["images/Screen Shot 2016-01-23 at 10.19.08 PM.png"],        link: "http://sitehypedesigns.com/"    }, {        title: "One Million Lines",        dates: "June 15'",        description: "Customized Bootstrap, mock site",        images: ["images/Screen Shot 2016-01-23 at 10.19.59 PM.png"],         link: "https://github.com/dudleyinc3/million-lines"    } ]};projects.display = function() {    for (project in projects.project) {        $("#projects").append(HTMLprojectStart);        var a = HTMLprojectLink.replace("%data%", projects.project[project].link);        var b = HTMLprojectTitle.replace("%data%", projects.project[project].title);        var c = HTMLprojectDates.replace("%data%", projects.project[project].dates);        var d = HTMLprojectDescription.replace("%data%", projects.project[project].description);        var e = HTMLprojectImage.replace("%data%", projects.project[project].images);        $(".project-entry:last").append(a + b, c, d, e);    }};projects.display();var education = {    schools: [ {        url: "https://www.mesacc.edu",        name: "Mesa Community College",        degree: "Associate/Fine Arts",        dates: "Sept 12'-Dec 14'",        location: "Mesa AZ",        majors: ["Music/Performance"]    }, {        url: "https://www.udacity.com",        name: "Udacity online",        degree: "Front-End Developer",        dates: "Nov. 15'-Current",        location: "Mountain View, CA",        majors: ["Web Developement"]    } ],    onlineClasses: [ {        title: "Front End Web Developer",        school: "Udacity",        date: "Nov 15'- Currently",        url: "https://www.udacity.com"    }, {        title: "HTML CSS3 website in a week",        school: "Udemy",        date: "July 15'",        url: "https://www.udemy.com/"    }, {        title: "PHP, Command Line, JavaScript/jQuery, HTML, CSS",        school: "Codecadamy",        dates: "Dec 14'- April 15'",        url: "https://www.codecademy.com"    }, {        title: "Fundamentals of Web Developement",        school: "Lynda",        date: "Feb 15'- March 15'",        url: "https://www.lynda.com"    } ]};education.display = function() {    $("#education").append(HTMLphysicalClasses);    for (course in education.schools) {        var a = HTMLschoolLink.replace("%data%", education.schools[course].url);        var b = HTMLschoolName.replace("%data%", education.schools[course].name);        var c = HTMLschoolDegree.replace("%data%", education.schools[course].degree);        var d = HTMLschoolMajor.replace("%data%", education.schools[course].majors);        var e = HTMLschoolDates.replace("%data%", education.schools[course].dates);        var f = HTMLschoolLocation.replace("%data%", education.schools[course].location);        $("#education").append(HTMLschoolStart);        $(".education-entry:last").append(a + b, c, d, e, f);    }    $("#education").append(HTMLonlineClasses);    for (course in education.onlineClasses) {        var g = HTMLonlineTitle.replace("%data%", education.onlineClasses[course].title);        var h = HTMLonlineSchool.replace("%data%", education.onlineClasses[course].school);        var i = g + h;        var j = HTMLonlineDates.replace("%data%", education.onlineClasses[course].date);        var k = HTMLonlineURL.replace("%data%", education.onlineClasses[course].url);        $("#education").append(HTMLschoolStart);        $(".education-entry:last").append(k + i, j);    }};education.display();$(document).click(function(a) {    var b = a.pageX;    var c = a.pageY;    logClicks(b, c);});function inName() {    var a = window.name;    a = a.trim().split(" ");    console.log(a);    a[1] = a[1].toUpperCase();    a[0] = a[0].slice(0, 1).toUpperCase() + a[0].slice(1).toLowerCase();    return a[0] + " " + a[1];}var name = $("#name").text();$("#main").append(internationalizeButton);$("#mapDiv").append(googleMap);$("#mapDiv").append(location);