// this JS section is for the light/dark mode toggle button

//Define variables
const displayChange = document.getElementById("#displayChange");
const lightmode = document.querySelector("#lightmode");

var mode = 'light'; 


//Event change upon button click
displayChange.addEventListener('click', function(){
    if (mode === 'light'){
        mode = 'dark';
        lightmode.className = 'darkmode';
    } else {
        mode = 'light'
        lightmode.className = 'lightmode';
    }
});



//testing 2 separate functions for comor theme change rathern than an if/else statement
// displayChange.addEventListener('click', myFunction() {
//     var element = document.body.header.h1;
//     element.classList.toggle("darkmode");
    
// })










