import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Shamshad, a passionate Web developer with a keen eye for MERN
          Stack . With a background in cse, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl mb-4">
  Education
</h1>

<div className="space-y-6">

  {/* B.Tech */}
  <div className="border-l-4 border-green-500 pl-4">
    <h3 className="text-lg font-bold text-gray-800">
      B.Tech in Computer Science Engineering
      <span className="text-sm text-gray-500 ml-2">(2026)</span>
    </h3>

    <p className="text-gray-600">
      Dr. A.P.J. Abdul Kalam Technical University, Lucknow
    </p>

    <p className="text-gray-700 mt-1">
      Gained strong knowledge in Data Structures, Algorithms, DBMS, and Operating Systems.
      Developed full-stack web applications using the MERN stack and followed best coding practices.
    </p>
  </div>

  {/* Diploma */}
  <div className="border-l-4 border-green-500 pl-4">
    <h3 className="text-lg font-bold text-gray-800">
      Diploma in Electronics and Communication Engineering
    </h3>

    <p className="text-gray-600">
      Govt Polytechnic Sirsa, Haryana
    </p>

    <p className="text-gray-700 mt-1">
      Studied core subjects like Electronic Circuits, Digital Electronics,
      Microprocessors, and Communication Systems.
      Worked on practical lab projects involving circuit design and embedded systems.
    </p>
  </div>

</div>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl mb-4">
  Skills
</h1>

<div className="space-y-4 text-gray-700">

  {/* Languages */}
  <div>
    <h3 className="font-bold text-gray-800">Programming Languages</h3>
    <p>JavaScript, Java, c++</p>
  </div>

  {/* Frontend */}
  <div>
    <h3 className="font-bold text-gray-800">Frontend Development</h3>
    <p>HTML, CSS, Tailwind CSS, React.js</p>
  </div>

  {/* Backend */}
  <div>
    <h3 className="font-bold text-gray-800">Backend Development</h3>
    <p>Node.js, Express.js</p>
  </div>

  {/* Database */}
  <div>
    <h3 className="font-bold text-gray-800">Database</h3>
    <p>MongoDB</p>
  </div>

  {/* Tools */}
  <div>
    <h3 className="font-bold text-gray-800">Tools & Technologies</h3>
    <p>Git, GitHub, VS Code, Postman</p>
  </div>

  {/* Concepts */}
  <div>
    <h3 className="font-bold text-gray-800">Core Concepts</h3>
    <p>Data Structures & Algorithms (DSA), DBMS, Operating Systems and Computer Network</p>
  </div>

  

</div>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl mb-4">
  Training
</h1>

<div className="space-y-6">

  {/* MERN Training */}
  <div className="border-l-4 border-green-500 pl-4">
    <h3 className="text-lg font-bold text-gray-800">
      MERN Stack Development Training
    </h3>

    <p className="text-gray-600">
      From Apna College Online Plateform
    </p>

    <p className="text-gray-700 mt-1">
      Learned full-stack web development using MongoDB, Express.js, React, and Node.js.
      Built responsive web applications and REST APIs while following best coding practices.
    </p>
  </div>

  {/* DSA Training */}
  <div className="border-l-4 border-green-500 pl-4">
    <h3 className="text-lg font-bold text-gray-800">
      Data Structures & Algorithms (DSA)
    </h3>

    <p className="text-gray-600">
      From Apna College Online Plateform
    </p>

    <p className="text-gray-700 mt-1">
      Practiced problem-solving using Java and improved understanding of core concepts
      like arrays, linked lists, recursion, and algorithms.
    </p>
  </div>

</div>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl mb-4">
  Core Subjects
</h1>

<div className="space-y-4 text-gray-700">

  <div className="border-l-4 border-green-500 pl-4">
    <h3 className="font-bold text-gray-800">
      Data Structures & Algorithms
    </h3>
    <p>
      Strong understanding of arrays, linked lists, stacks, queues,
      recursion, and basic algorithmic problem-solving.
    </p>
  </div>

  <div className="border-l-4 border-green-500 pl-4">
    <h3 className="font-bold text-gray-800">
      Database Management System (DBMS)
    </h3>
    <p>
      Knowledge of database design, normalization, SQL queries,
      and working with MongoDB.
    </p>
  </div>

  <div className="border-l-4 border-green-500 pl-4">
    <h3 className="font-bold text-gray-800">
      Operating System
    </h3>
    <p>
      Understanding of process management, memory management,
      scheduling, and basic OS concepts.
    </p>
  </div>

  <div className="border-l-4 border-green-500 pl-4">
    <h3 className="font-bold text-gray-800">
      Computer Networks
    </h3>
    <p>
      Basics of networking, OSI model, TCP/IP, and communication protocols.
    </p>
  </div>

</div>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl mb-2">
  Mission Statement
</h1>

<div>
  <p className="text-gray-700 font-normal leading-relaxed">
    My mission is to leverage my skills and creativity to deliver
    innovative web solutions that exceed client expectations and
    contribute positively to the digital landscape. I am committed to
    continuous learning and growth, always seeking new challenges and
    opportunities to expand my horizons.
  </p>
</div>
      </div>
    </div>
  );
}

export default About;
