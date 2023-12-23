//------------------------------------------------- NAVBAR STARTED ----------------------------------------------------------------------------------
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// DARK AND LIGHT MODE !!!
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// SEARCH BOX CODE
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//  SLIDEBAR CODE
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


// Add this script to your existing script.js file or create a new one

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
      if (window.scrollY > 70) { // Adjust the value based on when you want the navbar to become sticky
          nav.classList.add('sticky');
          document.body.classList.add('scrolling');
      } else {
          nav.classList.remove('sticky');
          document.body.classList.remove('scrolling');
      }
  });
});


//------------------------------------------------- NAVBAR COMPLETED ----------------------------------------------------------------------------------