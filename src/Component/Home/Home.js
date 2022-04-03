import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Home = () => {
    const [blogs, setBlogs]= useState([])
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