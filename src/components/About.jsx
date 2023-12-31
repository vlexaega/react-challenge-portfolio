import React from "react";

export default function About() {
    return (
      


      <section id="about">
        
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center font-Georgia">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-30 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Alex.
            <br className="hidden lg:inline-block" />I love building amazing apps.
          </h1>
          <div className="flex justify-center mt-4">
          {/* GitHub */}
              <a
              href="https://github.com/vlexaega"
              target="_blank"
              rel="noopener noreferrer"
              >
              <img
                  src='/github-mark.png'
                  alt="GitHub"
                  className="w-8 h-8 mx-2"
              />
          </a>
          {/* LinkedIn */}
          <a
              href="https://www.linkedin.com/in/alexvega"
              target="_blank"
              rel="noopener noreferrer"
          >
              <img
                  src='/LI-In-Bug.png'
                  alt="LinkedIn"
                  className="w-8 h-8 mx-2"
              />
          </a>
      </div>
      <br></br>
          <p className="mb-8 leading-relaxed">
          Hello World and welcome to my page! 
          <br></br>
          <br></br>
          I'm an ambitious web developer with a background in banking, originating from the beautiful shores of The Bahamas. 
          My journey in web development has been an exhilarating adventure, refining my skills in a myriad of technologies and frameworks like HTML, CSS, JavaScript, React, and more. Check out some of my accomplishments in the portfolio section below.
          Believing in the power of collaboration and innovation, I'm eager to connect and discuss how my experience can contribute to exciting creations. Let's create something amazing together!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6"> 
          <img
            className=" object-cover object-center rounded-full h-90 w-90"
            alt="hero"
            src="./IMG_2196.jpg"
          />
        </div>
      </div>
    </section>
    );
}