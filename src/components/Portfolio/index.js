import React from 'react';
import Project from '../Project';

const projects = [
   {
      id: 0,
      title: "Run Buddy",
      languages: "HTML, CSS, Advanced CSS",
      repo:"https://tylers175.github.io/Run-Buddy-/",
      description:"Allows you research as fitness trainer to get back in shape",
   },
   {
      id: 1,
      title:"Budget Tracker",
      langugages: "HTML, CSS, JS",
      description:"Keep track of your money profits",
      live:"https://peaceful-crater-lake-17537.herokuapp.com/",
      repo:"https://github.com/TylerS175/BudgetTrackerHW19.git"
   },
];

function Portfolio() {
 return(
 <div> 
    <p className="content is-medium">Portfolio</p>
    <Project projects={projects}/>
 </div>
 );
}

export default Portfolio;