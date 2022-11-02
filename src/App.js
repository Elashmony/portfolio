import './App.css'
import NAVBAR from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import About from "./component/aboutme/aboutme";
import Resume from "./component/resume/resume";
import Testimonial from './component/testimonial/testimonial';
import Contact from './component/contactme/contact';


function App()
{
  
  return (
    <div className="app">
      <NAVBAR />
      <Home />
      <About />
      <Resume />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;