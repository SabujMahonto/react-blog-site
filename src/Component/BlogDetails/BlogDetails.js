import React, { useContext } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { BlogsContext } from '../../App';
import './BlogDetail.css'

const BlogDetails = () => {
   const{id}=useParams()
  const navigate =useNavigate()
  const [blogs] = useContext(BlogsContext)
  console.log(blogs);

  const blog = blogs.find(blog => blog._id == id)
  console.log(blog);

    return (
        
        <>
        <div className='header-gradient' />
        <div>
          <button className='back-button' onClick={() => navigate(-1)}>
            
            <p>Back</p>
          </button>
          <div className='blog-details'>
            <div className='blog-image'>
              <img src={blog?.imageURL} alt='' />
            </div>
            <h1>{blog?.title}</h1>
            <p>{blog?.blog}</p>
          </div>
        </div>
      </>
    );
};

export default BlogDetails;