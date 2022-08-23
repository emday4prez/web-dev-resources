import { Link } from 'react-router-dom';
import './Blog.css';

function Blog({ blog }) {
  return (
    <a
      href={blog.url}
      target='_blank'
    >
      <div className='blog'>
        <h2>{blog.title}</h2>
        <div style={{ margin: '2px' }}></div>
        <h3>{blog.author}</h3>
      </div>
    </a>
  );
}

export default Blog;
