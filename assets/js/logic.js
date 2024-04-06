// this JS section is for the light/dark mode toggle button, lines 5-22

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












