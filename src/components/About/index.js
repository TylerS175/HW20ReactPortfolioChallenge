import React from "react";

function About() {
    return (
      <section className="my-5">
        <h1 id="about">Who am I?</h1>
        <img className="my-pic" src={process.env.PUBLIC_URL + '/images/SelfImage.JPG'} alt="Tyler Shifflett"/>
        <div className="my-2">
          <p>
            Greetings and welcome to my page! My name is Tyler Shifflett and I want to give you a small introduction about myself.
            I am currently studying web development at University of Richmond and want pursue a new career in the coding field as a Full Stack Developer. 
            My current position is servign as Appariser at the County of Louisa and graduated from J. Sargeant Reynolds Community College with Associate Degree in Social Sciences. 
            I have a passion for learning and I am always looking to improve my skills and knowledge. My best skill is hands-on experience and I am always looking to learn new things.
            Please feel free to check out my portfolio and contact me if you have any questions. Thank you for stopping by!
          </p>
        </div>
      </section>
    );
  }
  
  export default About;