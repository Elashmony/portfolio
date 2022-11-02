import './contact.css'
import { MdLocalPostOffice } from 'react-icons/md'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { IoIosSend } from 'react-icons/io'
import email from '../../Assests/mailz.jpeg'
import Title from '../helpComponents/Title';

function Contact()
{
    return (
        <div id='contact' className='contact pt-75'>
            <Title heading=' Contact Me' paragraph='Let Us Keep In Touch !' />
            <div className='container'>
                <div className='holder'>
                    <h1>Get In Touch <MdLocalPostOffice/></h1>
                    <div className='parent flex'>
                        <div className='left'>
                            <div className="icons">
                                <a href="/"><FaFacebookF /></a>
                                <a href="/"><FaLinkedinIn /></a>
                                <a href="/"><FaYoutube /></a>
                                <a href="/"><BsTwitter /></a>
                                <a href="/"><BsInstagram /></a>
                            </div>
                            <div className='mailz py-75'>
                                <p>Send Your Email Here!</p>
                                <img src={email} alt="not found" />
                            </div>
                        </div>
                        <form action='/'>
                            <p>Name</p>
                            <input type='text' />
                            <p>E-Mail</p>
                            <input type='email' />
                            <p>Message</p>
                            <textarea />
                            <button>Send <IoIosSend/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;