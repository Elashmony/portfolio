import './navbar.css';
import { HiMenuAlt3 } from 'react-icons/hi'
import { useState } from 'react';

function NAVBAR()
{
    const [mobil, setMobil] = useState(false)
   
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='holder flex'>
                    <div className="menu flex" ><HiMenuAlt3 onClick={() =>{setMobil(true)}} /></div>
                    <div className='logo'><h1>ELMERO</h1></div>
                    <ul className={mobil ? 'links-mobile' : 'links flex'} onClick={()=>{setMobil(false)}}>
                        <li className='nav-item'><a href='#home'>Home</a></li>
                        <li className='nav-item'><a href='#about'>AboutMe</a></li>
                        <li className='nav-item'><a href='#resume'>Resume</a></li>
                        <li className='nav-item'><a href='#testimonial'>Testimonial</a></li>
                        <li className='nav-item'><a href='#contact'>ContactMe</a></li>
                    </ul>
                </div> 
            </div>
        </div>
    );
}
export default NAVBAR;
