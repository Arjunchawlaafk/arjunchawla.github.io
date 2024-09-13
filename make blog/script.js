function addParagraph() {
    const blogContent = document.getElementById('blog-content');
    const paragraph = document.createElement('textarea');
    paragraph.className = 'input-field';
    paragraph.placeholder = 'Write your paragraph here...';
    blogContent.appendChild(paragraph);
}

function addImage() {
    const blogContent = document.getElementById('blog-content');
    const imageInput = document.createElement('input');
    imageInput.type = 'text';
    imageInput.className = 'input-field';
    imageInput.placeholder = 'Enter image URL...';
    blogContent.appendChild(imageInput);
}

function saveBlog() {
    const title = document.getElementById('blog-title').value;
    const contentElements = document.getElementById('blog-content').children;
    let blogContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="container">
                <div class="go-back">
                    <a href="index.html"><i class="fas fa-arrow-left"></i> Go Back</a>
                </div>
                <div class="blog-post">
                    <h1 class="blog-post-title">${title}</h1>
                    <p class="blog-post-meta">Date by <a href="#">Author</a> | Read Time</p>`;

    for (let element of contentElements) {
        if (element.tagName === 'TEXTAREA') {
            blogContent += `<p>${element.value}</p>`;
        } else if (element.tagName === 'INPUT' && element.type === 'text') {
            blogContent += `<img src="${element.value}" alt="Blog Image">`;
        }
    }

    blogContent += `
                </div>
            </div>
        </body>
        </html>`;

    const blob = new Blob([blogContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blog.html';
    a.click();
    URL.revokeObjectURL(url);
}