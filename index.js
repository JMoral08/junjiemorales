
$(document).ready(function(){
	var Init = {
		profile_0  		: $("#0-profile"),
		about_1  		: $("#1-about"),
		skills_2 		: $("#2-skills"),
		experience_3 	: $("#3-experience"),
		company_4		: $("#4-company"),
		contact_5 		: $("#5-contact"),

		profile  		: $("#profile"),
		about 			: $("#about"),
		skills 			: $("#skills"),
		experience 		: $("#experience"),
		company 		: $("#company"),
		contact 		: $("#contact"),
		button_icon 	: $("#btn-icon")
	};
	// Init.button_icon.on('click', Responsive);
	Init.profile_0.on('click', Profile);
	Init.about_1.on('click', About);
	Init.skills_2.on('click', Skills);
	Init.experience_3.on('click', Experience);
	Init.company_4.on('click', Company);
	Init.contact_5.on('click', Contact);
	Show();
	function Show() {
		var $self = Init;
			$self.profile.show();
			$self.about.hide();
			$self.skills.hide();
			$self.experience.hide();
			$self.company.hide();
			$self.contact.hide();
	}
	function Profile() {
		Show();
	}
	function About() {
		var $self = Init;
			$self.profile.hide();
			$self.about.show();
			$self.skills.hide();
			$self.experience.hide();
			$self.company.hide();
			$self.contact.hide();
	}
	function Skills() {
		var $self = Init;
			$self.profile.hide();
			$self.about.hide();
			$self.skills.show();
			$self.experience.hide();
			$self.company.hide();
			$self.contact.hide();
	}
	function Experience() {
		var $self = Init;
			$self.profile.hide();
			$self.about.hide();
			$self.skills.hide();
			$self.experience.show();
			$self.company.hide();
			$self.contact.hide();
	}
	function Company() {
		var $self = Init;
			$self.profile.hide();
			$self.about.hide();
			$self.skills.hide();
			$self.experience.hide();
			$self.company.show();
			$self.contact.hide();
	}
	function Contact() {
		var $self = Init;
			$self.profile.hide();
			$self.about.hide();
			$self.skills.hide();
			$self.experience.hide();
			$self.company.hide();
			$self.contact.show();
			
	}
	// function Responsive() {
	// 	var $self = Init;
	// 	var x = document.getElementById("topnav");
	// 	if (x.className === "topnav") {
	// 	    x.className += " responsive";
	// 	  } else {
	// 	    x.className = "topnav";
	// 	  }
	// }
});