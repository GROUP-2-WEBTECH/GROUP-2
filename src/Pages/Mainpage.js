import React from "react";
import Department from "../components/Department";
import Course from "../components/Course";
import Sidebar from "../components/SideBar";
import { Routes, Route } from 'react-router-dom';

import './Mainpage.css'


const Mainpage = ({config}) =>{
 return(
    <div className="mainpagecontainer">
         <div className="header">
                <div className="logo">eduVerse</div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search Classes"/>
                    </div>
                    <div className="school-info">
                        <i className="fa fa-bell"></i>
                        <i className="fa fa-user-circle"></i>
                        <div><span>Name of School</span></div>
                    </div>
                </div>
            <div className="container">
             <Sidebar/>
            <div className="main-content">
            <Routes>
                <Route path='/department' element={<Department config={config} />}/>
                <Route path='/course' element={<Course config={config} />}/>

            </Routes>
            </div>
             </div>
     </div>
);
};

export default Mainpage;