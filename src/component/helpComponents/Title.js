import './helpComp.css'

function Title(props)
{ 
    const {heading,paragraph}=props
    return (
        <div className="title">
            <h1>{heading}</h1>
            <p>{paragraph}</p>
            <div className="shape flex"><span></span></div>
        </div>
    );
}
export default Title;

