
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogDetails from './Component/BlogDetails/BlogDetails';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Videos from './Component/Videos/Videos';
 export const BlogsContext = createContext()

function App() {
 
  const [blogs,setBlogs]=useState([])

  return (
    <div>
      <Header></Header>
      <BlogsContext.Provider value={[blogs,setBlogs]}>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/videos' element={<Videos></Videos>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}>BlogDetail</Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </BlogsContext.Provider>
    </div>
  );
}

export default App;
