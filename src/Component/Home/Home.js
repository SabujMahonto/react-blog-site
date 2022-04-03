import React, { useContext, useEffect, useState } from 'react';
import { BlogsContext } from '../../App';
import Blog from '../Blog/Blog';
import './Home.css'


const Home = () => {
    const [blogs,setBlogs] =useContext(BlogsContext)

   
    useEffect(()=>{
        fetch('data.json').then(res =>res.json()).then(data =>setBlogs(data))
    },[])
    return (
        <div className='blog_container'>
            {
                blogs.map(blog => <Blog blog = {blog} key ={blog._id}></Blog>)
            }
        </div>
    );
};

export default Home;