import React from "react";
import Home from "./Pages/Home";
import Mainpage from "./Pages/Mainpage";
import MovingDot from "./components/MovingDot";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";


function App() {
   
      const token = localStorage.getItem("authToken"); 

      //Create Axios request configuration object
      const config = {
       headers: { Authorization: `Bearer ${token}` }, // Add Authorization header with token
      };
     

let [position, setPosition]= React.useState({x:0, y:0});

return (
<div className="App" 
onPointerMove={(e)=>{setPosition({x: e.clientX, y:e.clientY})}
}>
<Router>
  <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Mainpage/*"  element={<Mainpage config={config}/>} />
      
      
  </Routes>
</Router>
<MovingDot position={position}/>
</div>
   );
}
export default App;
