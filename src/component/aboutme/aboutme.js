import './aboutme.css'
import Me from './../../Assests/aboutme.jpg'
import Title from '../helpComponents/Title';
import React from 'react';
import GeneralComp from '../helpComponents/GeneralComp';

function About()
{
    const Highlights = [
        {
            title: 'Full Stack Developer',
        },
        {
            title: 'Interface Frontend Developer',
        },
        {
            title: 'React and React Native',
        },
        {
            title: 'Redux for Store Management',
        },
        {
            title: 'Managing Database',
        },
        {
            title: 'Building REST API',
        }
    ]
    
    return (
        <div id='about' className="about">
            <div className="container">
                <Title heading=' About Me' paragraph='Why Choose Us ?' />
                <div className="holder flex">
                    <img src={Me} alt="not found" />
                    <div className="text">
                        <p>
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Doloremque eos nobis, omnis,
                            atque rerum minus consequuntur deleniti,
                            temporibus sint consequatur consectetur eius.
                            Illum molestias sit quas aliquid. Incidunt, sequi ipsam!
                        </p>
                        <div className="high">
                            <h3>Here are a Few Highlights:</h3>
                            <GeneralComp array={Highlights}/>
                        </div>
                        <button>Hire Me</button>
                        <a href='omar.pdf' download="Elmero omar.pdf"><button>Get Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;