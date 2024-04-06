// main page where you write the blog

document.getElementById('blogInput').addEventListener('submit', function(event) {
    event.preventDefault();
    // pulls the info into consts to save the text written in the blog form
    const username = document.getElementById('username').value;
    const blogTitle = document.getElementById('blogTitle').value;
    const blog = document.getElementById('blog').value;

    // Save the blog to local storage
    const savedBlog = { username, blogTitle, blog };

    let blogInput = JSON.parse(localStorage.getItem('blogInput')) || [];
    blogInput.push(savedBlog);
    localStorage.setItem('blogInput', JSON.stringify(blogInput));

    //  after the input has been saved into local storage, it will redirect to the saved blog page to view the blog
    window.location.href = 'Blog.html';
});