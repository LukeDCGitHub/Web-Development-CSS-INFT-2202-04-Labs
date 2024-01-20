/*
  Names: Luke McMann, Blake Munro
  Student ID: 100893644, 100883548
  Date finished:
*/

var projects = document.getElementById("projects");
projects.setAttribute("href", "./projects.html");
projects.innerHTML = "Projects";

var navigationBar = document.getElementById("navbar");
var navigationItems = navigationBar.getElementsByTagName("li");
var newNavigationItem = document.createElement("li");
newNavigationItem.classList.add("nav-item");
anchor = document.createElement("a");
anchor.href = "#";
anchor.innerHTML = "Human Resources";
anchor.classList.add("nav-link");
newNavigationItem.appendChild(anchor);
navbar.insertBefore(newNavigationItem, navigationItems[4]);

