// when page has loaded
// $(document).on('ready',)...?

$(function () {
	// when usr click h2 
	$('h2').on('click', function () {
		// hide next element
		// $(this).next().hide();
		// better, toggle:
		$(this).next().slideToggle(400);
	})  
}); // DOM traversal. find elements h3. then listen for click on them. the event listener allows you to use 'this'.

// initialize vars for user functions
var firstName, lastName, fullName, lifeStage;

function askUserAboutSelf() {
  firstName = prompt('what\'s yr first name?');
  lastName = prompt('and yr last name?');
  fullName = firstName + ' ' + lastName;
  console.log('user is called ' + fullName);

  var userAge = parseInt(prompt('age in digits?'));

  if (userAge >= 66) {
  	lifeStage = 3;
  	console.log('user is' + userAge + ', probably retired');
  } else if (userAge >= 18) {
  	lifeStage = 2;
  	console.log('user is an adult');
  } else if (userAge >= 13) {
  	lifeStage = 1;
  	console.log('user is a teenager');
  } else if (0 < userAge) {
  	lifeStage = 0;
  	console.log('user is a child');
  } else {
      console.log('age not known')
  }
  
  greetUser();
}


function greetUser() {
	if (firstName.toLowerCase() == "General" && lastName.toLowerCase() != "Assembly") {
		if (lifeStage >= 2) {
			alert('Greetings, ' + fullName + '! I shall address you as "Your excellency".');
		} else {
			alert('Surely you\'re too young to be a general?');
		}
	}
}


// When user clicks image, ask questions:
$('img').on('click', askUserAboutSelf) // here, dont need brackets just name of fn, jqery is going to add brackets for us on the event
