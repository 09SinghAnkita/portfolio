import React from "react";
import "./edu.css";

const Edu = () => {
  return (
 
    
<div>
    <seection id="edu" >
    <h5 className="heading top">Knowledge</h5>
    <h2 className="heading-bottom">Work Experience and Education</h2>

    <div className="container edu">
      <div className="edu-item">
        
        <div  className="heading ">Work Experience</div>
        <h5 className="heading one">Opalina Technologies Pvt. Ltd. </h5>
        <h5 className="heading two"> August 2021-current</h5>
        <p  className="magin-around">
          Developing and designing new bank applications and Used car aggregator platform using React Typescript, Next JS,
          Bootstrap, MUI, Node JS, MongoDB, ExpressJS together with improvising existing project’s
          functionalities. 
        </p>
        
      </div>

      <div className="edu-item">
       
        <div className="heading">Education</div>
       
          <h4 className="magin-around">Indian Institute of Technology Roorkee.</h4>
          <h5 className="magin-around heading align"> Master of Science, 7.2 CGPA (2017-2019)</h5>
     

      
          <h4 className="magin-around"> Ramjas College, University of Delhi</h4>
          <h5 className="magin-around heading align">Bachelor of Science, 81% (2014-2017)</h5>
      

     
          <h4 className="magin-around"> Delhi Public School, Varanasi</h4>
          <h5 className="magin-around heading align"> Intermediate, 92.6% (2013) </h5>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         
     
        </div>
      </div>
   
    </seection>
    </div>
  
  );
};

export default Edu;
