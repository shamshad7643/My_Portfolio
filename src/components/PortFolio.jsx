import React from "react";

function PortFolio() {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
      title: "Amazon Clone",
      desc: "A fully responsive online store built with modern UI.",
      tech: ["HTML", "CSS"],
      live: "https://stately-baklava-e9a4b0.netlify.app/",
      code: "#",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      title: "Airbnb Clone",
      desc: "Full-stack Airbnb clone with booking & authentication.",
      tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
      live: "https://wanderlust-project-7mjm.onrender.com/listings",
      code: "#",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=400",
      title: "Personal Portfolio",
      desc: "Modern portfolio to showcase projects & skills.",
      tech: ["React", "Tailwind"],
      live: "https://compliteportfolio.netlify.app/",
      code: "#",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      title: "Dashboard UI",
      desc: "Data visualization dashboard with modern UI.",
      tech: ["React", "Tailwind"],
      live: "https://productivityproject.netlify.app/",
      code: "#",
    },
  ];

  return (
    <div
      name="Portfolio"   // ✅ SCROLL FIX
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16"
    >
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <span className="underline font-semibold">My Projects</span>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-6">
        {projects.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[180px] object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="font-bold text-lg mb-1">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{item.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 mb-3">
                {item.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-2 py-1 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                >
                  Live
                </a>
                <a
                  href={item.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;