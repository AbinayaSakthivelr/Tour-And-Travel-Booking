import React from 'react';
 // Import the CSS file for styling

const BlogPage = () => {
  return (
    <div className="blog-page-container">
      <h1>Welcome to Our Travel Blog</h1>
      <div className="blog-posts">
        {/* Example Blog Post 1 */}
        <div className="blog-post">
          <img src="path_to_image_1" alt="Blog Post 1" />
          <div className="blog-post-info">
            <h2>Title of Blog Post 1</h2>
            <p>Date: January 1, 2024</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dictum urna at tortor interdum, in aliquam urna tempor. Morbi
              convallis bibendum nunc, at convallis arcu.
            </p>
            <a href="/blog/post-1">Read More</a>
          </div>
        </div>

        {/* Example Blog Post 2 */}
        <div className="blog-post">
          {/* ... Similar structure for another blog post */}
        </div>

        {/* Repeat the structure for more blog posts */}
      </div>
    </div>
  );
};

export default BlogPage;
