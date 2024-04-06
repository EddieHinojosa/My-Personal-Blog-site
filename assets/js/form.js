// main page where you write the blog

function saveInput() {
    // Get the input value
    var input = document.getElementById('myInput').value;

    // Get the section
    var section = document.getElementById('mySection');

    // Create a new text node with the input value
    var textNode = document.createTextNode(input);

    // Append the text node to the section
    section.appendChild(textNode);
}