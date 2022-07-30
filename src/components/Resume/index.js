import React from 'react';

function Resume() {
  return (
    <div>
      <img className="my-pic" src={process.env.PUBLIC_URL + '/images/ResumeScreenshot.png'} alt="Resume"/>
    <ul>
        <li>HTML, CSS, Javascript</li>
    </ul>
    </div>
    );
  }
    
export default Resume;