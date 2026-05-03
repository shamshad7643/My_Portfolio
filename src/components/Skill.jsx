import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";

import javascript from "../../public/javascript.png";
import mongodb from "../../public/mongodb.jpg";
import react from "../../public/reactjs.png";
import springBoot from "../../public/express.png";
import node from "../../public/node.png";
import Git_icon from "../../public/Git_icon.png";
import tailwind from "../../public/tailwind.png";
import java from "../../public/java.png";
function Skill() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html5",
    },
    {
      id: 2,
      logo: css,
      name: "CSS3",
    },
   
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: mongodb,
      name: "Mongodb",
    },
    {
      id: 5,
      logo: react,
      name: "React.js",
    },
    {
      id: 6,
      logo: springBoot,
      name: "Express.js",
    },

     {
      id: 7,
      logo: node,
      name: "Node.js",
    },
    {
      id: 8,
      logo: Git_icon,
      name: "Git & Github",
    },
    {
      id: 9,
      logo: tailwind,
      name: "Tailwind",
    },
    {
      id: 10,
      logo: java,
      name: "Java",
    }
  ];
  return (
    <div
       name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Core 
          skills
        </h1>
        <p className="text-gray-600 ">
          Skilled in modern web technologies, I build efficient and scalable applications with a focus on clean design and performance. My expertise lies in developing full-stack solutions using industry-standard tools.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
