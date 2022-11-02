import './resume.css'
import { FaUserGraduate, FaHistory, FaLaptopCode, FaRegChartBar } from 'react-icons/fa'
import Title from '../helpComponents/Title';
import GeneralComp from '../helpComponents/GeneralComp';
import { EduArray ,Work ,ProgSkill ,Projects ,Interests } from '../Arrays'

function Resume()
{
    const handelClick=(e)=>
    {
        // Handling active Class
        document.querySelectorAll('.list-item').forEach((ele)=>
        {
            ele.classList.remove("active")
        },)
        e.currentTarget.classList.add("active")
        // Handling Scrolling
        document.querySelector('.scroll').style.transform = "translateY(" + e.currentTarget.dataset.scroll + ")"
        if (e.currentTarget.dataset.scroll === '-810px')
        {
            document.querySelectorAll('[data-width]').forEach(ele =>
            {
                ele.style.width = ele.dataset.width;
            })
        } else
        {
            document.querySelectorAll('[data-width]').forEach(ele =>
            {
                ele.style.width = '0';
            })
        }
    }
    return(
        <div id='resume' className='resume'>
            <div className='container pt-75'>
                <Title heading=' Resume' paragraph='My Formal Bio Details ' />
                <div className='holder flex py-75'>
                    <div className='controller flex'>
                        <div className='icons'>
                            <FaUserGraduate />
                            <FaHistory />
                            <FaLaptopCode />
                            <FaRegChartBar/>
                            <FaRegChartBar/>
                        </div>
                        <ul className='list'>
                            <li className='list-item active' data-scroll="0" onClick={handelClick}>Education</li>
                            <li className='list-item' data-scroll="-405px" onClick={handelClick}>Work History</li>
                            <li className='list-item' data-scroll="-810px" onClick={handelClick}>Programming Skilss</li>
                            <li className='list-item' data-scroll="-1215px" onClick={handelClick}>Projects</li>
                            <li className='list-item' data-scroll="-1620px" onClick={handelClick}>Interests</li>
                        </ul>
                    </div>
                    <div className='viewer'>
                        <div className='scroll'>
                            <div ><GeneralComp array={EduArray} /></div>
                            <div ><GeneralComp array={Work} /></div>    
                            <div className='skills'><GeneralComp array={ProgSkill} /></div>    
                            <div ><GeneralComp array={Projects} /></div>    
                            <div ><GeneralComp array={Interests} /></div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Resume;



// Lorem ipsum dolor sit amet consectetur,
// adipisicing elit.Sint ipsa eum sequi voluptates accusantium
// officiis sit blanditiis quod distinctio voluptatem aut error eos
// obcaecati nobis culpa, minima, perferendis impedit in !