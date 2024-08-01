import Particles from './particles.js';
import "../App.css";


const Page1=()=>{

    const scrollProjects = () => {
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

    return(
    <div>
      <div id='background-container'>
          <Particles id="tsparticles"/>
        <div id='text-container'>
          <h1>Hi, I'm Jon! </h1>
          <h4>a third year computer science student at <span id='NYU'>NYU</span></h4>
          <h4 id='contact'>Contact me at: jtagergeffner@gmail.com</h4>
        </div>
        <div id='view-projects'>
          <button onClick={scrollProjects}>View My Projects</button>
        </div>
      </div>

   
    <h2 id='skills'>Skills </h2>
  


    <div className='hidden'><p className='line'>_______________________________________________________________________________________________</p></div>

    </div>
    );
};

export default Page1;