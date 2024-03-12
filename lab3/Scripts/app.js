/*
  Names: Luke McMann, Blake Munro
  Student ID: 100893644, 100883548
  Date finished: 2024-03-12
*/


/* custom JavaScript goes here */
// if(document.URL.includes("contact-list.html") || document.URL.includes("task-list.html")) {
//   location.href = "../../";
// }
//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

((core) =>
{
    /**
     * Inject the Navigation bar into the Header element and highlight the active link based on the pageName parameter
     *
     * @param {string} pageName
     */
    function loadHeader(pageName)
    {
      // inject the Header
      $.get("./Views/components/header.html", function(data)
      {
        $("header").html(data); // load the navigation bar

        toggleLogin(); // add login / logout and secure links

        $(`#${pageName}`).addClass("active"); // highlight active link

        // loop through each anchor tag in the unordered list and 
        // add an event listener / handler to allow for 
        // content injection
        $("a").on("click", function()
        { 
          $(`#${router.ActiveLink}`).removeClass("active"); // removes highlighted link
          router.ActiveLink = $(this).attr("id");
          loadContent(router.ActiveLink, ActiveLinkCallBack(router.ActiveLink));
          $(`#${router.ActiveLink}`).addClass("active"); // applies highlighted link to new page
          history.pushState({},"", router.ActiveLink); // this replaces the url displayed in the browser
        });

        // make it look like each nav item is an active link
        $("a").on("mouseover", function()
        {
          $(this).css('cursor', 'pointer');
        });
      });
    }

    /**
     * Inject page content in the main element 
     *
     * @param {string} pageName
     * @param {function} callback
     * @returns {void}
     */
    function loadContent(pageName, callback)
    {
      // inject content
      $.get(`./Views/content/${pageName}.html`, function(data)
      {
        $("main").html(data);

        callback();
      });
      
    }

    /**
     * Load footer on each page
     */
    function loadFooter()
    {
      // inject the Footer
      $.get("./Views/components/footer.html", function(data)
      {
        $("footer").html(data);
      });
    }

    /**
     * Display content on the home page
     */
    function displayHome()
    {
      // Add content to index.html
      document.getElementById("indexHeader").textContent = "Home Page";
      document.getElementById("indexWelcome").textContent = "Welcome to Fake Company's Website!";
    }

    /**
     * Display content on the about page
     */
    function displayAbout()
    {
        // Add content to about.html
        document.getElementById("aboutHeader").textContent = "About";
        document.getElementById("lukeHeader").textContent = "Luke";
        document.getElementById("lukeAbout").innerHTML = "Luke is on our web development, windows app and database design teams. He is proficient uisng C# and .NET, SQL, <br/>HTML, CSS, PHP, Javascript, Java and Python. He is always learning and broading his skillset. In his personal life he likes <br/>hanging out with his friends and family. Visit his <a href='https://www.linkedin.com/in/luke-mcmann-8254ab295/'>LinkedIn</a> to learn more about him.";
        document.getElementById("blakeHeader").textContent = "Blake";
        document.getElementById("blakeAbout").innerHTML = "Blake is our project manager. He's good at making our jobs difficult. He knows very little about programming so<br/> we're not sure why he works for us. Infact he doesn't know much of anything really. He does bring us tootsie rolls on tuesdays,<br/> so I guess he's useful for something. Here's his <a href='https://www.linkedin.com/in/blakemunro/'>LinkedIn</a>. It might show something he's good at.";
    }

    /**
     * Display content on the projects page
     */
    function displayProjects()
    {
      // Add content to projects.html
      document.getElementById("projectHeader").textContent = "Favorite Projects";
      document.getElementById("projectOneHeader").textContent = "Project #1";
      document.getElementById("projectOne").innerHTML = "This was one of the first project's that we created as a company. This project was to create a cypher program that encypted<br/>entered text into the Al Bhed language featured in Final Fantasy X. With the development team being huge fans of FFX<br/>and the project being an intresting and fun concept caused this project to be very enjoyable for us. ";
      document.getElementById("projectTwoHeader"). textContent = "Project #2";
      document.getElementById("projectTwo").innerHTML = "This project was the last project we did using C# and .NET. For this project we had to create a windows form that would be<br/>used to admit students into Canadian Colleges. The program stores admitted students in a .JSON file that can be used<br/>to see admitted students information.";
      document.getElementById("projectThreeHeader").textContent = "Project #3";
      document.getElementById("projectThree").innerHTML = "This was one of the more recent projects that our company produced. This project is a Tic-Tac-Toe board, built with C#.<br/> This ground breaking game allows players to customize their names and symbols like nothing you've seen before.<br/>This game also keeps a record of the scores for each game to determine the overall winner.";

    }

    /**
     * Display content on the services page
     */
    function displayServices()
    {
      // Add content to services.html
      document.getElementById("servicesHeader").textContent = "Services";
      document.getElementById("serviceOneHeader").innerHTML = "<br/>Website Development";
      document.getElementById("serviceOne").innerHTML = "Here at Fake company we create custom website for our customers. These websites are built using HTML, CSS and PHP or Javascript.<br/>We also provide service to existing websites written in PHP and or Javascript. Our web development team has lots of experience<br/>creating amazing websites that serve our customers business needs. Visit our contact us page to request our services.";
      document.getElementById("serviceHeaderTwo").innerHTML = "<br/>Windows Apps";
      document.getElementById("serviceTwo").innerHTML = "Here at Fake company we offer windows form app creation. Using C# and .NET we build our customers dream applications.<br/>Our windows app development team as lots of experience building impressive and beautiful apps that meet our customers needs. <br/>Visit our contact us page to request our services.";
      document.getElementById("serviceThreeHeader").innerHTML = "<br/>Database Services";
      document.getElementById("serviceThree").innerHTML = "Here at Fake company we provide database services. Specializing in SQL we can create you a database, design you a database or modify <br/>and improve your existing database. Our team has plenty of experience desgining and implementing databases. Please visit our contact<br/>us page to request our services. ";
      
    }

    function testFullName()
    {
      let messageArea = $("#messageArea").hide();
      let fullNamePattern = /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;

        
        $("#fullName").on("blur", function()
        {
          if(!fullNamePattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitlalized last name.");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });
    }

    function testContactNumber()
    {
      let messageArea = $("#messageArea");
      let contactNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        
        $("#contactNumber").on("blur", function()
        {
          if(!contactNumberPattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Contact Number. Country code and area code are both optional");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });
    }

    function testEmailAddress()
    {
      let messageArea = $("#messageArea");
      let emailAddressPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        
        $("#emailAddress").on("blur", function()
        {
          if(!emailAddressPattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Email Address.");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });
    }

    function formValidation()
    {
      testFullName();
      testContactNumber();
      testEmailAddress();
    }

    function displayContact()
    {
      // form validation
      formValidation();

        $("#sendButton").on("click", (event)=> 
        {
          if($("#subscribeCheckbox")[0].checked)
          {
            let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);

            if(contact.serialize())
            {
              let key = contact.FullName.substring(0, 1) + Date.now();

              localStorage.setItem(key, contact.serialize());
            }
          }
        });
    }

    function displayContactList() 
    {
      // don't allow visitors to go here
      authGuard();

      if (localStorage.length > 0) 
      {

        let contactList = document.getElementById("contactList");

        let data = "";

        let keys = Object.keys(localStorage);
         
        let index = 1;

        for (const key of keys) 
        {
          let contactData = localStorage.getItem(key);

          let contact = new core.Contact();
          contact.deserialize(contactData);

          data += `<tr>
          <th scope="row" class="text-center">${index}</th>
          <td>${contact.FullName}</td>
          <td>${contact.ContactNumber}</td>
          <td>${contact.EmailAddress}</td>
          <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
          <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
          </tr>`;

          index++;
        }

        contactList.innerHTML = data;

        $("button.edit").on("click", function(){
          location.href = "/edit#" + $(this).val();
         });

         $("button.delete").on("click", function(){
           if(confirm("Are you sure?"))
           {
            localStorage.removeItem($(this).val());
           }
           location.href = "/contact-list"; // refresh the page
         });

         $("#addButton").on("click", function() 
         {
          location.href = "/edit";
         });
      }
    }

    function displayEdit()
    {
      let key = location.hash.substring(1);

      let contact = new core.Contact();

      // check to ensure that the key is not empty
      if(key != "")
      {
        // get contact info from localStorage
        contact.deserialize(localStorage.getItem(key));

        // display contact information in the form
        $("#fullName").val(contact.FullName);
        $("#contactNumber").val(contact.ContactNumber);
        $("#emailAddress").val(contact.EmailAddress);
      }
      else
      {
        // modify the page so that it shows "Add Contact" in the header 
        $("main>h1").text("Add Contact");
        // modify edit button so that it shows "Add" as well as the appropriate icon
        $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);
      }

      // form validation
      formValidation();
      
     $("#editButton").on("click", function() 
        {
            // check to see if key is empty
          if(key == "")
          {
            // create a new key
            key = contact.FullName.substring(0, 1) + Date.now();
          }

          // copy contact info from form to contact object
          contact.FullName = $("#fullName").val();
          contact.ContactNumber = $("#contactNumber").val();
          contact.EmailAddress = $("#emailAddress").val();

          // add the contact info to localStorage
          localStorage.setItem(key, contact.serialize());

          // return to the contact list
          location.href = "/contact-list";
          
        });

      $("#cancelButton").on("click", function()
      {
        // return to the contact list
        location.href = "/contact-list";
      });
    }

    /**
     * Processes the Login and performs validation
     */
    function performLogin()
    {
      let messageArea = $("#messageArea");
      messageArea.hide();

      let username = $("#username");
      let password = $("#password");
      let success = false;
      let newUser = new core.User();

      // use ajax to access the json file
      $.get("./Data/users.json", function(data)
      {
        // check each user in the users.json file  (linear search)
        for (const user of data.users) 
        {
          if(username.val() == user.Username && password.val() == user.Password)
          {
            newUser.fromJSON(user);
            success = true;
            break;
          }
        }

        // if username and password matches - success... then perform login
        if(success)
        {
          // add user to session storage
          sessionStorage.setItem("user", newUser.serialize());

          // hide any error message
          messageArea.removeAttr("class").hide();

          // redirect user to secure area - contact-list.html
          loadHeader("contact-list");
          loadContent("contact-list", ActiveLinkCallBack("contact-list"));
          loadFooter();
        }
        else
        {
          // display an error message
          username.trigger("focus").trigger("select");
          messageArea.show().addClass("alert alert-danger").text("Error: Invalid login information");
        }
      });
    }

    /**
     * Displays and Processes the Login page
     */
    function displayLogin()
    {

      $("#loginButton").on("click", function() 
      {
        performLogin();
      });

      $("#password").on("keypress", function(event)
      {
        if(event.key == "Enter")
        {
          performLogin();
        }
        });

      $("#cancelButton").on("click", function()
      {
        // clear the login form
        document.forms[0].reset();
        // return to the home page
        location.href = "/home";
      });
    }

    function displayRegister()
    {

    }

    function toggleLogin()
    {
      // if user is logged in
      if(sessionStorage.getItem("user"))
      {
        // swap out the login link for logout
        $("#loginListItem").html(
        `<a id="logout" class="nav-link" aria-current="page"><i class="fas fa-sign-out-alt"></i> Logout</a>`
        );

        $("#logout").on("click", function()
        {
          // perform logout
          sessionStorage.clear();

          // redirect back to login
          loadHeader("login");
          loadContent("login", ActiveLinkCallBack("login"));
          loadFooter();
        });

        // make it look like each nav item is an active link
        $("#logout").on("mouseover", function()
        {
          $(this).css('cursor', 'pointer');
        });
       
        $(`<li class="nav-item">
        <a id="contact-list" class="nav-link" aria-current="page"><i class="fas fa-users fa-lg"></i> Contact List</a>
        </li>`).insertBefore("#loginListItem");

        // Add the task-list link to the navbar
        $(`<li class="nav-item">
        <a id="task-list" class="nav-link" aria-current="page"><i class="fas fa-clipboard fa-lg"></i> Task List</a>
        </li>`).insertBefore("#loginListItem");
      }
      else
      {
        // swap out the logout link for login
        $("#loginListItem").html(
          `<a id="login" class="nav-link" aria-current="page"><i class="fas fa-sign-in-alt"></i> Login</a>`
          );
      }
    }

    function authGuard()
    {
      if(!sessionStorage.getItem("user"))
      {
      // redirect back to login page
      loadHeader("login");
          loadContent("login", ActiveLinkCallBack("login"));
          loadFooter();
      }
    }

    function display404()
    {

    }

    function displayLogout()
    {

    }

    function ActiveLinkCallBack(activeLink)
    {
      switch (activeLink) 
      {
        case "home": return displayHome;
        case "about": return displayAbout;
        case "projects": return displayProjects;
        case "services": return displayServices;
        case "contact": return displayContact;
        case "contact-list": return displayContactList;
        case "edit": return displayEdit;
        case "login": return displayLogin;
        case "register": return displayRegister;
        case "404": return display404;
        // Add the task-list callback function
        case "task-list": return DisplayTaskList;
        case "logout": return display404;
        default:
          console.error("ERROR: callback does not exist: " + activeLink);
          break;
      }
    }

    /**
     * This function adds a new Task to the TaskList
     */
    function AddNewTask() 
    {
      let messageArea = $("#messageArea");
      messageArea.hide();
      let taskInput = $("#taskTextInput");

      if (taskInput.val() != "" && taskInput.val().charAt(0) != " ") 
      {
        let newElement = `
              <li class="list-group-item" id="task">
              <span id="taskText">${taskInput.val()}</span>
              <span class="float-end">
                  <button class="btn btn-outline-primary btn-sm editButton"><i class="fas fa-edit"></i>
                  <button class="btn btn-outline-danger btn-sm deleteButton"><i class="fas fa-trash-alt"></i></button>
              </span>
              <input type="text" class="form-control edit-task editTextInput">
              </li>
              `;
        $("#taskList").append(newElement);
        messageArea.removeAttr("class").hide();
        taskInput.val("");
      } 
      else 
      {
        taskInput.trigger("focus").trigger("select");
        messageArea.show().addClass("alert alert-danger").text("Please enter a valid Task.");
      }
    }

    /**
     * This function is the Callback function for the TaskList
     *
     */
    function DisplayTaskList()
    {

        // Keep out users that are not logged in
        authGuard();

        let messageArea = $("#messageArea");
        messageArea.hide();
        let taskInput = $("#taskTextInput");

        // add a new Task to the Task List
        $("#newTaskButton").on("click", function()
        {         
            AddNewTask();
        });

        taskInput.on("keypress", function(event)
        {
          if(event.key == "Enter")
          {
            AddNewTask();
          }
         });

        // Edit an Item in the Task List
        $("ul").on("click", ".editButton", function(){
           let editText = $(this).parent().parent().children(".editTextInput");
           let text = $(this).parent().parent().text();
           editText.val(text).show().trigger("select");
           editText.on("keypress", function(event)
           {
            if(event.key == "Enter")
            {
              if(editText.val() != "" && editText.val().charAt(0) != " ")
              {
                editText.hide();
                $(this).parent().children("#taskText").text(editText.val());
                messageArea.removeAttr("class").hide();
              }
              else
              {
                editText.trigger("focus").trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid Task.");
              }
            }
           });
        });

        // Delete a Task from the Task List
        $("ul").on("click", ".deleteButton", function(){
            if(confirm("Are you sure?"))
            {
                $(this).closest("li").remove();
            }    
        });
    }

    function Start()
    {
        console.log("App Started...");

        loadHeader(router.ActiveLink);
      
        loadContent(router.ActiveLink, ActiveLinkCallBack(router.ActiveLink));

        loadFooter();
    }

    window.addEventListener("load", Start);

    core.Start = Start;

})(core || (core={}));