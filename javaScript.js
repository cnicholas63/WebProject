function validateInput() { // Validate form input (just checks length no more robust than that)
  if ( $( "input:first" ).val().length == 0 ) { // If the user has not entered anything
      
      $("#message").text("<-- Please enter your name before entering the site").fadeIn("fast");

      $("#message").fadeOut(3000);
  } 
  else {
  	var str = $( "input:first" ).val(); // Get username
  	str = str.split(' ').join('+'); // replace any spaces with + ready for uri
  	var str="home.html" + '?name=' + str; // concatenate the name to query part of uri

  	window.location.href = str; // call link to page
  }
}

function extractName() { // Extract user name(s) from url

  var str = window.location.href.split('=')[1]; // Split the url at the '=' and take the right most part

  str = str.split('+').join(' '); // replace '+' with spaces leaving a string containing the user's name(s)

  $("#user").text("Welcome: " + str).show(); // Insert the users name into the #user section
}



