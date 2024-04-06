//  this JS section is for the blog page, where the local storage will be saved into the HTML page

document.addEventListener('DOMContentLoaded', function() {
    const blogInput = JSON.parse(localStorage.getItem('blogInput')) || [];
    const postLogs = document.getElementById('postLogs');

    // this section will add the blog post to the blog page into the HTML in teh id=postLogs section of the body
    blogInput.forEach(function(blog) { 
        const blogContainer = document.createElement('div');
        blogContainer.classList.add('post');
        blogContainer.innerHTML = `
            <h2>${blog.blogTitle}</h2>
            <p>By: ${blog.username}</p>
            <p>${blog.blog}</p>
        `;
        postLogs.appendChild(blogContainer);
    });
});