import './testimonial.css'
import { FaQuoteRight, FaQuoteLeft, FaStar } from 'react-icons/fa'
import img from '../../Assests/Testimonial/lady.png';



function TestCard(props)
{
    const { item } = props;
    return (
        <div className='testCard item'>
            <p>
                <FaQuoteLeft /> {item.text} <FaQuoteRight />
            </p>
            <div className='star'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className='person flex'>
                <img src={img} className='personImg' alt="not found" />
                <div className='persText'>
                    <p>{item.name}</p>
                    <p>{item.job}</p>
                </div>
            </div>
        </div>
    );
}
export default TestCard;
