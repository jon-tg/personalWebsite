import Page1 from './components/page1.js';
import Page2 from './components/page2.js';
import Projects from './components/projects.js';
import React, {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
  const observer=new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
      if (entry.isIntersecting) 
        entry.target.classList.add('show');
      

    });

  });

  
  const hiddenElements=document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  return () => {
    hiddenElements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };
}, []);
  

  return (
    <div id='app'>

      <div id='page1'>
        <Page1/>
      </div>

     <div id='page2'>
      <Page2/>
     </div>

    <div id='projects'>
       <Projects/> 
    </div>

    </div>


  );
}




export default App;
