/*
  Names: Luke McMann, Blake Munro
  Student ID: 100893644, 100883548
  Date finished: 2024-02-20
*/

// Create minimumLength constant for user inputs
const nameMinimumLength = 2;
const emailMinimumLength = 8;
const passwordMinimumLength = 6;
const validInputsLength = 5;

/**
 * Create User class this will hold user information and represent a users details
 */
class User {

  /**
   * Constructor that sets all User proterties
   * @param {*} firstName 
   * @param {*} lastName 
   * @param {*} username 
   * @param {*} email 
   * @param {*} password 
   */
  constructor(firstName, lastName, username, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  /**
   * Display the user's information
   */
  displayUser() {
    console.log(`First Name: ${this.firstName}`);
    console.log(`Last Name: ${this.lastName}`);
    //console.log(`Username: ${this.username}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password ${this.password}`);
  };
}

// Update projects nav item
var projects = document.getElementById("projects");
// Change link and name of nav item
projects.setAttribute("href", "./projects.html");
projects.innerHTML = "Projects";
// Create and add icon to nav item
var gridIcon = document.createElement("span");
gridIcon.classList.add("fa", "fa-th");
projects.prepend(gridIcon);

// Create human resources nav item
var navigationBar = document.getElementById("navbar");
var navigationItems = navigationBar.getElementsByTagName("li");
var newNavigationItem = document.createElement("li");
newNavigationItem.classList.add("nav-item");
anchor = document.createElement("a");
anchor.href = "#";
anchor.innerHTML = "Human Resources";
anchor.classList.add("nav-link");
var personIcon = document.createElement("span");
// Add icon to nav item
personIcon.classList.add("fa", "fa-user");
// Add nav item to nav bar
anchor.prepend(personIcon);
newNavigationItem.appendChild(anchor);
navbar.insertBefore(newNavigationItem, navigationItems[4]);

// Create page footer
var footerNavigationBar = document.createElement("nav");
footerNavigationBar.classList.add("navbar", "fixed-bottom", "navbar-light", "bg-light");
var divisionTag = document.createElement("div");
divisionTag.classList.add("container-fluid");
var footerAnchor = document.createElement("a");
footerAnchor.classList.add("navbar-brand");
// Add copyright info
footerAnchor.innerHTML = "&copy; CopyRight 2024";
// Add footer to all pages
divisionTag.appendChild(footerAnchor);
footerNavigationBar.appendChild(divisionTag);
document.body.appendChild(footerNavigationBar);

// Check if on the index.html page
if(document.URL.includes("index.html")) {
  // Add content to index.html
  document.getElementById("indexHeader").textContent = "Home Page";
  document.getElementById("indexWelcome").textContent = "Welcome to Fake Company's Website!";
}

// Check if on the about.html page
if(document.URL.includes("about.html")) {
  // Add content to about.html
  document.getElementById("aboutHeader").textContent = "About";
  document.getElementById("lukeHeader").textContent = "Luke";
  document.getElementById("lukeAbout").innerHTML = "Luke is on our web development, windows app and database design teams. He is proficient uisng C# and .NET, SQL, <br/>HTML, CSS, PHP, Javascript, Java and Python. He is always learning and broading his skillset. In his personal life he likes <br/>hanging out with his friends and family. Visit his <a href='https://www.linkedin.com/in/luke-mcmann-8254ab295/'>LinkedIn</a> to learn more about him.";
  document.getElementById("blakeHeader").textContent = "Blake";
  document.getElementById("blakeAbout").innerHTML = "Blake is our project manager. He's good at making our jobs difficult. He knows very little about programming so<br/> we're not sure why he works for us. Infact he doesn't know much of anything really. He does bring us tootsie rolls on tuesdays,<br/> so I guess he's useful for something. Here's his <a href='https://www.linkedin.com/in/blakemunro/'>LinkedIn</a>. It might show something he's good at.";
  
}

// Check if on the projects.html page
if(document.URL.includes("projects.html")) {
  // Add content to projects.html
  document.getElementById("projectHeader").textContent = "Favorite Projects";
  document.getElementById("projectOneHeader").textContent = "Project #1";
  document.getElementById("projectOne").innerHTML = "This was one of the first project's that we created as a company. This project was to create a cypher program that encypted<br/>entered text into the Al Bhed language featured in Final Fantasy X. With the development team being huge fans of FFX<br/>and the project being an intresting and fun concept caused this project to be very enjoyable for us. ";
  document.getElementById("projectTwoHeader"). textContent = "Project #2";
  document.getElementById("projectTwo").innerHTML = "This project was the last project we did using C# and .NET. For this project we had to create a windows form that would be<br/>used to admit students into Canadian Colleges. The program stores admitted students in a .JSON file that can be used<br/>to see admitted students information.";
  document.getElementById("projectThreeHeader").textContent = "Project #3";
  document.getElementById("projectThree").innerHTML = "This was one of the more recent projects that our company produced. This project is a Tic-Tac-Toe board, built with C#.<br/> This ground breaking game allows players to customize their names and symbols like nothing you've seen before.<br/>This game also keeps a record of the scores for each game to determine the overall winner.";

}

// Check if on the services.html page
if(document.URL.includes("services.html")) {
  // Add content to services.html
  document.getElementById("servicesHeader").textContent = "Services";
  document.getElementById("serviceOneHeader").innerHTML = "<br/>Website Development";
  document.getElementById("serviceOne").innerHTML = "Here at Fake company we create custom website for our customers. These websites are built using HTML, CSS and PHP or Javascript.<br/>We also provide service to existing websites written in PHP and or Javascript. Our web development team has lots of experience<br/>creating amazing websites that serve our customers business needs. Visit our contact us page to request our services.";
  document.getElementById("serviceHeaderTwo").innerHTML = "<br/>Windows Apps";
  document.getElementById("serviceTwo").innerHTML = "Here at Fake company we offer windows form app creation. Using C# and .NET we build our customers dream applications.<br/>Our windows app development team as lots of experience building impressive and beautiful apps that meet our customers needs. <br/>Visit our contact us page to request our services.";
  document.getElementById("serviceThreeHeader").innerHTML = "<br/>Database Services";
  document.getElementById("serviceThree").innerHTML = "Here at Fake company we provide database services. Specializing in SQL we can create you a database, design you a database or modify <br/>and improve your existing database. Our team has plenty of experience desgining and implementing databases. Please visit our contact<br/>us page to request our services. ";
}

// Check if on the contact.html page
if(document.URL.includes("contact.html")) {
  // Add content to contact.html
  document.getElementById("contactHeader").textContent = "Contact Form";
}

/**
 * Function submitForm() gets form element values by id and stores them in local variables,
 * displays user infromation in console, and redirects the user to the home page.
 */
function submitForm() {
  // Get user information
  var name = document.getElementById('name').value;
  var contactNumber = document.getElementById('contactNumber').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Output user information to console
  console.log('Name:', name);
  console.log('Contact Number:', contactNumber);
  console.log('Email Address:', email);
  console.log('Message:', message);

  /**
   * Start timer to redirect after 3 seconds
   */
  setTimeout(function () {
    window.location.href = 'index.html';
  }, 3000);
}


/*----- Lab 2 -----*/

// Check if a user is logged in
if(sessionStorage.getItem("username") != null) {
  // Add username to navbar
  $("#contactUsNavigation").after(`<li id=\"usernameNavigation\" class=\"nav-item\"><a class=\"nav-link\" href=\"#\">${sessionStorage.getItem("username")}</a></li>`);
}

/**
 * When login form is submitted and username and password are not blank add username to navbar
 */
function submitLogin() {
  // Get user enter information
  let username = $("#loginUsername").val();
  let password = $("#loginPassword").val();

  // Check if username is already in navbar
  if($("#usernameNavigation").length != 0) {
    // Remove the old username form navbar
    $("#usernameNavigation").remove();
    // Create session variable storing the users username
    sessionStorage.setItem("username", username);
  }

  // Check if the length of the entered data is greater than 0
  else if(username.length > 0 && password.length > 0) {
    // Create session variable storing the users username
    sessionStorage.setItem("username", username);
  }  
}

// Check if on the register.html page
if(document.URL.includes("register.html")) {
  // Add a div to the end of the file that will hold error messages
  $("#lastDivRegister").after("<div class=\"alert alert-danger\" id=\"errorMessage\"></div>");
  // Hide the newly created div
  $("#errorMessage").hide();
}

/**
 * When the submit button on the register form is clicked excute statements
 */
$("#registerForm").submit((e) => {
  e.preventDefault();
  e.stopPropagation();
  
  // Get the elements with the is-valid class
  let validInputs = document.getElementsByClassName("is-valid");

  // If the number of inputs with the is-valid class is 5 then the form is valid
  if(validInputs.length == validInputsLength) {
    
    // Hide any error messages
    $("#errorMessage").hide();
    
    // Create new user using the data entered by the user
    let user = new User($("#firstName").val(), $("#lastName").val(), $("#username").val(), $("#email").val(), $("#password").val());
    
    // Display the user information to the console
    user.displayUser();

    // Clear the form
    clearForm();
  }
  // If there are not 5 inputs with the is-valid class, display error message
  else {
     // Show an error message
     $("#errorMessage").show();
     $("#errorMessage").html("Ooops! Something Went Wrong...");
  }
});

/**
 * Call when input is invalid, show error message and add "is-invalid" class to the input 
 * @param {*} formInputId 
 * @param {*} errorMessage 
 */
function invalidInput(formInputId, errorMessage) {
  // Unhide hidden div and display error message to the user
  $("#errorMessage").show();
  $("#errorMessage").html(errorMessage);
  
  $(formInputId).removeClass("is-valid");
  $(formInputId).addClass("is-invalid");
}

/**
 * Call when an input is valid change class to "is-valid" and hide any error messages
 * @param {*} formInputId 
 */
function validInput(formInputId) {
  $("#errorMessage").hide();
  $(formInputId).removeClass("is-invalid");
  $(formInputId).addClass("is-valid");
}

/**
 * Listen for the event that the firstName input is unfocused and display an error message or accept the input based on whether it's valid or not
 */
$("#firstName").on("input", function() {
  // Check if input is a valid length
  if($("#firstName").val().length < nameMinimumLength) {
    invalidInput("#firstName", "<center>First name must be greater than 2 characters</center>");
  }
  // Else the length is valid
  else {
    validInput("#firstName");
  }
});

/**
 * Listen for the event that the lastName input is unfocused and display an error message or accept the input based on whether it's valid or not
 */
$("#lastName").on("input", function() {
  // Check if input is a valid length
  if($("#lastName").val().length < nameMinimumLength) {
    invalidInput("#lastName", "<center>Last name must be greater than 2 characters</center>");
  }
  // Else the length is valid
  else {
    validInput("#lastName");
  }
});

/**
 * Clear the form by setting it to it's original state and hiding error messages
 */
function clearForm() {
  $("#registerForm")[0].reset();
  $("#errorMessage").hide();
  $('#firstName').removeClass('is-valid');
  $('#lastName').removeClass('is-valid');
  $('#email').removeClass('is-valid');
  $('#password').removeClass('is-valid');
  $('#confirmPassword').removeClass('is-valid')

}

// Wait until page is fully loaded
$(document).ready(function() {

  // Function to validate email
  function validateEmail(email) {

    // Get email text box
    let emailTextBox = document.getElementById("email");

    // Regex taken from https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript author: community wiki 
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  // Check if the email address is value if it is return true
	if(!!email && typeof email === 'string' && email.match(regex)) {
      emailTextBox.classList.add("is-valid");
      return true;
  }
  // If the email is not value return false
  else {
    return false;
  }
}

  // Event listener for input change in email field
  $("#email").on("input", function() {

    // Get the value of the email
    var email = $(this).val();

    // If email is not valid
    if (!validateEmail(email)) {
      // Set email to invalid and display error message
      invalidInput("#email", "<center>Email must contain proper format.</center>");
        }
    else if (email.length < emailMinimumLength){
      invalidInput("#email", "<center>Email must be at least 8 characters long.");
    }
      // If email data is valid
    else {
        // Hide error message if email is valid
        validInput("#email")
    }
  });

  
    // Function to validate password match
    function validatePasswordMatch(password, confirmPassword) {

      // Return true of false if password values are equal
      return password === confirmPassword;
  }

  // Event listener for input change in password field
  $("#password").on("input", function() {
    
      // Get values for password and confirm password
      var password = $(this).val();
      var confirmPassword = $("#confirmPassword").val();

      // If password lenght is invalid
      if (password.length < passwordMinimumLength) {

          // Set password to invalid and display error message
          invalidInput("#password", "<center>Password must be at least 6 characters long.</center>");

          // Password is valid length
      } else {
          // Set password to valid
          validInput("#password")

          // If confirm password is not empty
          if (confirmPassword !== "") {

              // If passwords match
              if (validatePasswordMatch(password, confirmPassword)) {

                  // Set password and confirm password to valid
                  validInput("#password")
                  validInput("#confirmPassword")
                  
                // Passwords do not match
              } else {
                  // Set confirm password to invalid and display error message
                  invalidInput("#confirmPassword", "<center>Passwords do not match.</center>");
              }
          }
      }
  });

  // Event listener for input change in confirm password field
  $("#confirmPassword").on("input", function() {

      // Get value for password and confirm password
      var password = $("#password").val();
      var confirmPassword = $(this).val();

      // If the confirm password length is valid
      if (confirmPassword.length < passwordMinimumLength) {

          // Set confirm password to invalid and display error message
          invalidInput("#confirmPassword", "<center>Password must be at least 6 characters long.</center>");

        // If the passwords do not match
      } else if (!validatePasswordMatch(password, confirmPassword)) {

          // Set confirm password to invalid and display error message
          invalidInput("#confirmPassword", "<center>Passwords do not match.</center>");

        // If confirm password data is valid
      } else {
          // Set confirm password to valid
          validInput("#confirmPassword")
      }
  });
});
