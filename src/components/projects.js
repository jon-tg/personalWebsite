import "../App.css";

const Projects = () =>
    {
        return(
            <div id='Project'>
                 <div id='makeupApp' className='project'> 
                     <div className='projectDesc'>
                    <h3  className='hidden'>Beauty Product Search Application</h3>
                    <h4  className='hidden'>JavaScript, REST API </h4>
                    </div>
                    <iframe  className='hidden' src="https://main.df5739st0nwqk.amplifyapp.com/" width='80%' height='500vh'></iframe>
                </div>
                
                <div id='stockApp' className='project'> 
                     <div className='projectDesc'>
                    <h3  className='hidden'>Stock Data Application</h3>
                    <h4  className='hidden'>React, JavaScript, REST API </h4>
                    </div>
                    <iframe  className='hidden' src="https://main.dyj4cprdewfok.amplifyapp.com/" width='80%' height='500vh'></iframe>
                </div>


            </div>

      
        );
    };

export default Projects;