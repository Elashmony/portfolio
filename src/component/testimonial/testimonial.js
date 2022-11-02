import './testimonial.css';
import tail from './../../Assests/shape-bg.png'
import Title from '../helpComponents/Title';
import TestCard from './testcard';
import { test } from '../Arrays'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from 'react';



function Testimonial()
{
    const [num, setNum] = useState('3');
    const [wind, setWindow] = useState(window.innerWidth)
    window.onresize = () =>
    {
        setWindow(window.innerWidth)
    }
    useEffect(() =>
    {
        if (wind < 830 && wind > 414)
        {
            setNum('2')
        } else if (wind <= 414)
        {
            setNum('1')
        } else
        {
            setNum('3')
        }
    }, [wind])
    return (
        <div id='testimonial' className='testimonial pt-75'>
            <Title heading='Testimonial' paragraph='What My Client Say About Me ?' />
            <div className='back'>
                <div className='container'>
                    <OwlCarousel loop className="owl-theme py-75" margin={20} autoplay items={num} dots={false}>
                        {test.map((item, index) =>
                        {
                            return <TestCard key={index} item={item} />
                        })}
                    </OwlCarousel>
                </div>
                <img src={tail} alt="not found" className='tail' />
            </div>
        </div>

    );
}
export default Testimonial;









