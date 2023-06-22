
import './App.css';

import LoadingBar from 'react-top-loading-bar'

import React  from 'react'
import Navbar  from "./component/Navbar";
// import Login  from "./component/Login";
// import Signup from "./component/Signup";
import News  from './component/News';

import { BrowserRouter,
  Routes,
 Route, 
} from "react-router-dom";
import NoteState from './context/NoteState';
import { useState } from 'react';





const App =()=> {
 
 
 let ApiKey= process.env.REACT_APP_API_URL;

 const [progress, setprogress] = useState(0)
   
 
  
    
    
    return (
      <NoteState>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
        <Route  path='/'element ={<News  apikey={ApiKey} setprogress={setprogress} key="z"  pagesize={20} country="in" category="general" />} /> 
        <Route  path='/business'element ={<News  apikey={ApiKey}  setprogress={setprogress} key="business" pagesize={20} country="in" category="business"/>} /> 
        <Route  path='/entertainment'element ={<News  apikey={ApiKey} setprogress={setprogress} key="entertainment" pagesize={20} country="in" category="entertainment"/>} /> 
        <Route  path='/general'element ={<News  apikey={ApiKey}  setprogress={setprogress} key="general" pagesize={5} country="in" category="general"/>} /> 
        <Route  path='/health'element ={<News apikey={ApiKey}  setprogress={setprogress} key="health" pagesize={20} country="in" category="health"/>} /> 
        <Route  path='/science'element ={<News apikey={ApiKey}  setprogress={setprogress} key="science" pagesize={20} country="in" category="science"/>} /> 
        <Route  path='/sports'element ={<News apikey={ApiKey}  setprogress={setprogress} key="sports" pagesize={20} country="in" category="sports"/>} /> 
        <Route  path='/technology'element ={<News apikey={ApiKey}  setprogress={setprogress} key="technology" pagesize={20} country="in" category="technology"/>} /> 
        {/* <Route exact path="/login" element={<Login /> }/>
        <Route exact path="/signup" element={<Signup/> }/>
         */}
        </Routes>
        </BrowserRouter>
        </NoteState>
    )
  }


export default App
