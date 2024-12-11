import React from "react";
import "./Login.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Login = ()=>{

    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const navigate = useNavigate();


const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
                                     // Basic form validation to ensure required fields are filled
    if (!email || !password) {
          alert("Please enter your email and password.");
          return; // Exit if validation fails
        }
         try {
          const response = await axios.post('http://localhost:3000/auth/login', {
            email,
            password,
          });
          const token = response.data.token;
          localStorage.setItem("authToken",token)
     alert('Login successful:', response.data); 
     navigate("/Mainpage");
     } catch (error) {
          // Handle login errors gracefully (e.g., display an error message)
          console.error('Login error:', error);
          alert
    (error.response?.data?.message || "Login failed. Please check your credentials.");
        }
      };

    return(
    <div className="loginmain">
    <div className="loginform">
    <h2>eduVerse</h2>
    <p>log into your account</p>
<form>
 <label for='email'>Email</label>
    <input className="email" id="email" type="email" 
        placeholder="Your Email" onChange={(e)=> setEmail(e.target.value)} 
        required/>

 <label for="password">Password</label>
    <input className="password" id="password" type="password" 
        placeholder="Enter New Password" onChange={(e)=> setPassword(e.target.value)} 
        required/>
        <div class="checkbox"></div>

   <button type="submit" onClick={handleSubmit}>Log in</button>
 </form>
</div>

    <div className="loginContent">
    <div class="contentcontainer">
        <h1>Start managing now!</h1>
        <p>EduVerse allows you to manage your school, college, or any educational center with ease.</p>
        <div class="imagecontainer"><img src="SM Images/image4.png" alt="Person working on computers"/></div>
    </div>
    </div>
  </div>
    );
};
export default Login;