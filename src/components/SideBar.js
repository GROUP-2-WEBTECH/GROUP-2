import React from "react";
import "./Sidebar.css"
import { Link } from "react-router-dom";

const Sidebar =()=>{
    return(
        <div className="sidebar">
        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Institute Profile</a></li>
            <li><Link to={"/Mainpage/department"}>Department</Link></li>
            <li><Link to={"/Mainpage/"}>Student</Link></li>
            <li><a href="#">Subjects</a></li>
            <li><a href="#">Employees</a></li>
        </ul>
    </div>
    );
};



export default Sidebar;