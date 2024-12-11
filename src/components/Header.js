import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header =()=>{
    return(
      
        <header>
<div className="header">
				<div className="logo">
					<h2 className="flex p-6 text-white"
                     style={{ fontWeight: 700 }}>eduVerse</h2>
					<p className="p-4 text-white">Help</p>
				</div>
				<div className="navbar">
               <Link to={"/Login"} className="signin">
                            Login
                        </Link>
                 </div>
			</div>
        </header>
      
    );
};

export default Header;