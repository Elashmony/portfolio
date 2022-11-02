import "./home.css"
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import tail from './../../Assests/shape-bg.png'
import Me from './../../Assests/profile.2.jpg'
import {Typewriter } from "react-simple-typewriter"

function Home()
{
    return (
        <div id="home" className="home">
            <div className="container">
                <div className="holder flex">
                    <div className="img">
                        <img src={Me} alt="not found" />
                    </div>
                    <div>
                        <div className="icons">
                            <a href="/"><FaFacebookF /></a>
                            <a href="/"><FaLinkedinIn /></a>
                            <a href="/"><FaYoutube /></a>
                            <a href="/"><BsTwitter /></a>
                            <a href="/"><BsInstagram /></a>
                        </div>
                        <h2>
                            Hello,I'M
                            <span><strong>  Omar </strong></span>
                            <p className="wave">
                                👋🏻
                            </p>
                        </h2>
                        <h1>
                            <Typewriter
                                loop
                                words={[
                                    "Omar Alaa Dev",                                
                                    "Full Stack Developer",                                  
                                    "MERN Stack Developer",                                 
                                    "Cross Platform v",                            
                                    "React/React Native Dev"                           
                                ]}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <p>Knock of building application with front and back and operation.</p>
                        <button>Hire Me</button>
                        <a href="omar.pdf" download="Elmero omar.pdf"><button>Get Resume</button></a>
                    </div>
                </div>
            </div>
            <img src={tail} alt="not found" className="tail"/>
        </div>
    );
}

export default Home;

