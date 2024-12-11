// import React, { useState } from 'react';
// import axios from 'axios';
// import './PostBlog.css'; // Import the CSS file for styling

// const PostBlog = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [author, setAuthor] = useState('');
//   const [error, setError] = useState(null);

//   const handlePostBlog = async (e) => {
//     e.preventDefault();

//     const blog = { title, content, author };

//     try {
//       const response = await axios.post('http://localhost:8080/blogs', blog, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       alert('Blog posted successfully!');
//       setTitle('');
//       setContent('');
//       setAuthor('');
//     } catch (error) {
//       setError('Failed to post blog');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="post-blog-container">
//       <h1 className="form-title">Post a New Blog</h1>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handlePostBlog} className="blog-form">
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label>Content</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label>Author</label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             required
//             className="form-input"
//           />
//         </div>
//         <button type="submit" className="submit-button">Post Blog</button>
//       </form>
//     </div>
//   );
// };

// export default PostBlog;







// import React, { useState } from 'react';
// import axios from 'axios';
// import './PostBlog.css';

// const PostBlog = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [author, setAuthor] = useState('');
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState(null);
//   const handlePostBlog = async (e) => {
//     e.preventDefault();
  
//     // Debug log to check if the image is selected
//     console.log("Selected image:", image);
  
//     if (!title || !content || !author) {
//       alert("Please fill in all required fields.");
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('content', content);
//     formData.append('author', author);
//     if (image) {
//       formData.append('image', image);
//     }
  
//     try {
//       const response = await axios.post('http://localhost:8080/blogs', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Blog posted successfully!');
//       setTitle('');
//       setContent('');
//       setAuthor('');
//       setImage(null);
//     } catch (error) {
//       setError(`Failed to post blog: ${error.response ? error.response.data : error.message}`);
//       console.error(error);
//     }
//   };
  

//   return (
//     <div className="post-blog-container">
//       <h1 className="form-title">Post a New Blog</h1>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handlePostBlog} className="blog-form">
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label>Content</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label>Author</label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label>Image</label>
//           <input
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
//             className="form-input"
//           />
//         </div>
//         <button type="submit" className="submit-button">Post Blog</button>
//       </form>
//     </div>
//   );
// };

// export default PostBlog;



import React, { useState } from 'react';
import axios from 'axios';
import './PostBlog.css';

const PostBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // New state for image URL
  const [error, setError] = useState(null);

  const handlePostBlog = async (e) => {
    e.preventDefault();

    if (!title || !content || !author) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post('https://springboot-backend-indian-culture.up.railway.app/blogs', {
        title,
        content,
        author,
        imageUrl, // Send image URL
      });
      alert('Blog posted successfully!');
      setTitle('');
      setContent('');
      setAuthor('');
      setImageUrl('');
    } catch (error) {
      setError(`Failed to post blog: ${error.response ? error.response.data : error.message}`);
      console.error(error);
    }
  };

  return (
    <div className="post-blog-container">
      <h1 className="form-title">Post a New Blog</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handlePostBlog} className="blog-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Post Blog</button>
      </form>
    </div>
  );
};

export default PostBlog;