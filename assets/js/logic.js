// this JS section is for the light/dark mode toggle button

    //Define variables

const lightmode = document.querySelector('.lightmode');
const displayChange = document.getElementById('displayChange');

let theme = 'light'; 


//Event change upon button click
displayChange.addEventListener('click', function() {
    if (theme === 'light') {
        theme = 'dark';
        lightmode.className = 'dark';
        console.log('lets go darkmode');
    } else {
        theme = 'light'
        lightmode.className= 'light';
        console.log('lets go lightmode');
    }
});



// testing 2 separate functions for comor theme change rathern than an if/else statement
// displayChange.addEventListener('click', myFunction() {
//     var element = document.body.header.h1;
//     element.classList.toggle("darkmode");
    
// })










