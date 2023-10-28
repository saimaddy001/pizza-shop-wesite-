import React from "react";
import Navbar from "./Navbar";
import '../Style/Home.css'
import video from '../viedo/vdo1.mp4'
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import Footer from "./Footer";
import Product from "./Product";
import get1 from "./tto.js/get1";

function Home() {
    return (
        <>
            <Navbar />
            <div>
                <video id="background-video" autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="ceter">
                    <h1>ADVENTURE AWAITS</h1>
                    <h2>What Are You Waiting For</h2>
                    <div className="button">
                    <button className="get" onClick={get1} >GET STARTED</button>

                   <button className="get1" onClick={Product}>WATCH TRAILER < SlideshowOutlinedIcon/>   </button>
                    </div>
                    
                </div>
            </div>
             <Footer />
        </>
    );
}

export default Home;
