import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import WaveBackground from "../components/WaveBackground";
import './Home.css'


const Home = () =>{
    return(
        <div className="home">
            <Header/>
            <div className="hero">
            <Content/>
            </div>
            <WaveBackground/>
        </div>
    )
}
export default Home;