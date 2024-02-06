/*
  Names: Luke McMann, Blake Munro
  Student ID: 100893644, 100883548
  Date finished: 2024-02-01
*/

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

/**
 * When login form is submitted and username and password are not blank add username to navbar
 */
function submitLogin() {
  // Get user enter information
  let username = $("#loginUsername").val();
  let password = $("#loginPassword").val();

  // Check if the length of the entered data is greater than 0
  if(username.length > 0 && password.length > 0) {
    // Add username to navbar
    $("#contactUsNavigation").after(`<li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">${username}</a></li>`)
  }  
}

