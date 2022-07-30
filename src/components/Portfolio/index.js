import React from 'react';
import Project from '../Project';

const projects = [
   {
      id: 0,
      title: "Run Buddy",
      languages: "HTML, CSS, Advanced CSS",
      repo:"https://tylers175.github.io/Run-Buddy-/",
      image: "/images/RunBuddy.png",
      description:"Allows you research as fitness trainer to get back in shape",
   },
   {
      id: 1,
      title:"Budget Tracker",
      langugages: "HTML, CSS, JS",
      image: "/images/BudgetTracker.png",
      live:"https://peaceful-crater-lake-17537.herokuapp.com/",
      repo:"https://github.com/TylerS175/BudgetTrackerHW19.git",
      description:"Keep track of your money profits"
   },
   {
      id: 2,
      title:"Weather Dashboard",
      languages: "HTML, CSS, JS",
      image: "/images/WeatherDashboard.png",
      live:"https://github.com/TylerS175/Assignment-6-Weather-Check.git",
      repo:"https://github.com/TylerS175/Assignment-6-Weather-Check.git",
      description: "Displays the current weather conditions for a given city."
   },
   {
      id: 3,
      title:"Sport-Seekers",
      languages: "Handlebars, CSS, JS",
      image:"images/SportSeekers.png",
      live:"https://serene-beyond-42809.herokuapp.com/",
      repo:"https://github.com/bethanyjean/sports-seekers.git",
      description:"A website that allows you to search for sports teams and see their information."
   },
   {
      id: 4,
      title:"Tabs",
      languages: "CSS, JS, JQuery, Third-Party API",
      image:"images/Tabs.png",
      live:"https://thomascerr.github.io/TABS-Brewery-Weather-Application/",
      repo:"https://github.com/ThomasCerr/TABS-Brewery-Weather-Application.git",
      description:"A website that allows you to search for nearest breweries!"
   },
   { id: 5,
   title: "Code Quiz",
   Languages: "JS, WEB API",
   image:"images/CodeQuiz.png",
   live:"https://tylers175.github.io/Code-Quiz-Assignment-4/",
   repo:"https://github.com/TylerS175/Code-Quiz-Assignment-4.git"
   },
];

function Portfolio() {
 return(
 <div> 
    <p className="content is-medium">Portfolio</p>
    <hr />

    <Project projects={projects}/>
 </div>
 );
}

export default Portfolio;