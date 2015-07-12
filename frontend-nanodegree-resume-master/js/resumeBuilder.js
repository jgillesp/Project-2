//To do
//bio display needs to be better organized
//display online schools
/*
All of your code for adding elements to the resume should be within functions.
And all of your functions should be encapsulated within the same objects containing your resume data.
*/

var bio = {
	name: 'Jennifer Gillespie',
	role: 'Web Developer',
	contacts: {
		mobile: '(669) 237-8990',
		email: 'jenn.gillespie@gmail.com',
		github: 'jgillesp',
		twitter: '@jgillesp',
		location: 'Sunnyvale'

	},
	welcomeMessage: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz.',
	skills: ['Programming', 'Photography', 'Mom', 'Homeschool teacher'],
	biopic: 'images/headshot-small.jpg',
}

 bio.formattedName = HTMLheaderName.replace('%data%', bio.name);
 bio.formattedRole = HTMLheaderRole.replace('%data%', bio.role);
 bio.formattedMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
 bio.formattedPic = HTMLbioPic.replace('%data%', bio.biopic);

 bio.displayHeader = function() {
	  $('#header').prepend(bio.formattedRole);
	  $('#header').prepend(bio.formattedName);

	  $('#header').append(bio.formattedPic);
	  $('#header').append(bio.formattedMsg);
 }



// you can put these on the `bio` object
bio.formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
bio.formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
bio.formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
bio.formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
bio.formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

 bio.displayTopContacts = function() {
 	$('#topContacts').append(bio.formattedMobile);
 	$('#topContacts').append(bio.formattedEmail);
 	$('#topContacts').append(bio.formattedGithub);
 	$('#topContacts').append(bio.formattedTwitter);
 	$('#topContacts').append(bio.formattedLocation);
 }



 bio.displayFootercontacts = function() {
 	$('#footerContacts').append(bio.formattedMobile);
 	$('#footerContacts').append(bio.formattedEmail);
 	$('#footerContacts').append(bio.formattedGithub);
 	$('#footerContacts').append(bio.formattedTwitter);
 	$('#footerContacts').append(bio.formattedLocation);
 }



bio.displayBioSkills = function() {
	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
	 for (var skill in bio.skills) {
	 	var formattedSkills = HTMLskills.replace('%data%', bio.skills[skill]);
	 	$('#skills').append(formattedSkills);
	 };
	};
}



var education = {
	schools: [
		{
			name: 'Paducah Community College',
			location: 'Paducah',
			degree: 'Associates of Science',
			majors: ['EE', 'Accounting'],
			dates: 1994,
			url: 'http://www.westkentucky.kctcs.edu/'

		},
		{
			name: 'SVA',
			location: 'New York City',
			degree: 'BA',
			majors: ['Photography'],
			dates: '1999',
			url: 'http://www.sva.edu/'
		}
	],
	onlineCourses: [
		{
			title: 'Javascript Basics',
			school: 'Udacity',
			date: 2015,
			url: 'https://www.udacity.com'
		},
		{
			title: 'Intro to HTML and CSS',
			school: 'Udacity',
			date: 2015,
			url: 'https://www.udacity.com'
		}
	]
}


education.displayEducation = function() {
 		$('#education').append(HTMLschoolStart);
 		for (var school in education.schools) {
 			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
 			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
 			var formattedNameDegree = formattedSchoolName + ' ' + formattedSchoolDegree;
 			$('.education-entry:last').append(formattedNameDegree);
 			var formattedSchoolCity = HTMLschoolLocation.replace('%data%', education.schools[school].location);
 			$('.education-entry:last').append(formattedSchoolCity);
 			var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
 			$('.education-entry:last').append(formattedSchoolDates);

 			var majorStr = education.schools[school].majors.join(', ');

 			var formattedMajor = HTMLschoolMajor.replace('%data%', majorStr);
 			$('.education-entry:last').append(formattedMajor);
 		}
 		$('#education').append(HTMLonlineClasses);
 		for (course in education.onlineCourses) {
 			$('#education').append(HTMLschoolStart);
 			var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
 			var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
 			var formattedTitleSchool = formattedTitle + ' ' + formattedSchool;
 			$('.education-entry:last').append(formattedTitleSchool);
 			var formattedDate = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
 			$('.education-entry:last').append(formattedDate);
 			var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
 			$('.education-entry:last').append(formattedURL);
 		}

 	}





var work = {
	jobs: [
	{
		employer: 'self',
		title: 'Homeschool teacher',
		location: 'Sunnyvale',
		dates: 'September 2013 - current',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
	},
	{
		employer: 'tapsquare',
		title: 'Office Manager',
		location: 'Tucson',
		dates: 'June 2007 - December 2012',
		description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.'
	}

	]

}

work.displayWork = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedCity = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescripton = HTMLworkDescription.replace('%data%', work.jobs[job].description);

		$('.work-entry:last').append(formattedEmployerTitle);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedCity);
		$('.work-entry:last').append(formattedDescripton);


	}
}



var projects = {
	project: [
	{
		title: 'Portfolio Site',
		dates: 'May - June 2015',
		description: 'Build a responsive website based on design mock-up',
		images: ['http://placekitten.com/g/150/150', 'http://placekitten.com/g/150/150']
	},
	{
		title: 'Online Resume',
		dates: 'June - July 2015',
		description: 'Project designed to learn javascript',
		images: ['http://placekitten.com/g/150/150', 'http://placekitten.com/g/150/150']
	}

		]
	}

projects.displayProject = function() {
	for (proj in projects.project) {
		$('#projects').append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.project[proj].title);
		var formattedProjectDate = HTMLprojectDates.replace('%data%', projects.project[proj].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.project[proj].description);

		$('.project-entry:last').append(formattedProjectTitle);
		$('.project-entry:last').append(formattedProjectDate);
		$('.project-entry:last').append(formattedProjectDescription);

		if (projects.project[proj].images.length > 0) {
			for (image in projects.project[proj].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects.project[proj].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}

	}

}




//Logs mouse clicks to the console
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

//Displays a map of where I lived and worked
function locationizer(work) {
    var locArray = [];
    for (var loc in work.jobs) {
        var newLocation = work.jobs[loc].location;
        locArray.push(newLocation);
         }
    return locArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));
$('#mapDiv').append(googleMap);


bio.displayHeader();
bio.displayTopContacts();
bio.displayFootercontacts();
bio.displayBioSkills();
education.displayEducation();
work.displayWork();
projects.displayProject();


/*

//Logs formatted name to the console
function inName(name) {
	var nameArray = name.split(' ');
	var fName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	var newName = fName + ' ' + nameArray[1].toUpperCase();
	return newName;
}

console.log(inName(bio.name));

$('#main').append(internationalizeButton);



*/