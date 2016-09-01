//bio object
var bio = {
	"name": "Iva Erceg",
	"role": "Web developer",
	"contacts": {
		"mobile": "555-555-555",
		"email": "erceg_iva@yahoo.co.uk",
		"github": "https://github.com/Iva123",
		"twitter": "@whatever",
		"location": "Zagreb",
	},
	"welcomeMessage": "I am Iva Erceg, psychologist, currently in process of learning web development. I like all things geeky!",
	"skills": ["counseling", "CBT", "HTML", "CSS", "Bootstrap", "JS"],
	"biopic": "images/Iva.jpg",
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedPic);
		$("#header").append(formattedMessage);
		//header && footer contacts
		var contacts = [];
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		contacts.push(formattedEmail);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		contacts.push(formattedGitHub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		contacts.push(formattedTwitter);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		contacts.push(formattedMobile);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		contacts.push(formattedLocation);
		$("#topContacts").append(contacts);
		$("#footerContacts").append(contacts);
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function(skill) {
				$("#skills").append(HTMLskills.replace("%data%", skill));
			});
		}
	}
};
//education object
var education = {
	"schools": [{
		"name": "Faculty of Humanities and Social Sciences",
		"location": "Osijek",
		"degree": "Masters",
		"majors": ["Psychology"],
		"dates": "2012",
		"url": "http://web.ffos.hr/"
	}],
	"onlineCourses": [{
		"title": "Front-end Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "August 2016 -",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}, {
		"school": "Udacity",
		"title": "Intro To Computer Science",
		"dates": "August 2015 - October 2015",
		"url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
	}],
	display: function() {
		education.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
			$(".education-entry:last").append(formattedName + formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		});
		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			education.onlineCourses.forEach(function(course) {
				$("#education").append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
				var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
				var formattedDate = HTMLonlineDates.replace("%data%", course.dates);
				var formattedURL = HTMLonlineURL.replace("%data%", course.title).replace("#", course.url);
				$(".education-entry:last").append(formattedTitle + formattedSchool);
				$(".education-entry:last").append(formattedDate);
				$(".education-entry:last").append(formattedURL);
			});
		}
	}
};
//work object
var work = {
	"jobs": [{
		"employer": "Rehabilitation center Stančić",
		"title": "Special Education Teacher",
		"location": "Zagreb",
		"dates": "September 2015 -",
		"description": "Teaching people with mental disabilities computer skills"
	}, {
		"employer": "En ten tini",
		"title": "Child Psychologist",
		"location": "Zagreb",
		"dates": "June 2013 - June 2014",
		"description": "Working with children and parents"
	}],
	display: function() {
		work.jobs.forEach(function(job) {
			$("#workExperience").append(HTMLworkStart);
			var formattedPosition = HTMLworkTitle.replace("%data%", job.title);
			var formattedDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			$(".work-entry:last").append(formattedEmployer + formattedLocation + formattedPosition);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		});
	}
};
//projects object
var projects = {
	"projects": [{
		"title": "Porfolio Site",
		"dates": "August 2016",
		"description": "My first project in FEND, where I learn how to transform mockup into web page. Technologies used: HTML, CSS, Bootstrap.",
		"images": ["images/code-small.jpg"]
	}],
	display: function() {
		projects.projects.forEach(function(project) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
			var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			if (project.images.length > 0) {
				project.images.forEach(function(image) {
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
				});
			}
		});
	}
};
bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);