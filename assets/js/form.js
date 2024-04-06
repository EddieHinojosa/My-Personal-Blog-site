// main page where you write the blog

document.getElementById('blogInput').addEventListener('submitBtn', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const blogTitle = document.getElementById('blogTitle').value;
    const blog = document.getElementById('blog').value;


    const savedBlog = { username, blogTitle, blog };

    // Save to local storage
    let blogInput = JSON.parse(localStorage.getItem('blogInput')) || [];
    posts.push(savedBlog);
    localStorage.setItem('posts', JSON.stringify(blogInput));

    // Redirect to blog page
    window.location.href = 'Blog.html';
});