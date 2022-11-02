import './helpComp.css';
import React from 'react';

function GeneralComp(props)
{
    const { array } = props
    return (
        array.map((item, index) =>
        {
            return (
                <div className='GeneralComp' key={index}>
                    <h2 className='StyledList'>{item.title}</h2>
                    {item.heading ? <h2 className='heading'>{item.heading}</h2> : ''}
                    {item.text ? <p className='text'>{item.text}</p> : ''}
                    {item.date?<p className='date'>{item.date}</p>:''}
                    {item.width ? <p className='progress' ><span data-width={item.width}></span></p>:''}
                </div>
            );
        })
    )
}
export default GeneralComp;


