import { useEffect, useState } from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div id="myProjects">
      <h2 className="my-8 text-3xl font-semibold text-center underline underline-offset-8">
        My Projects
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="my-8 px-4 lg:px-0">
          <div className="card lg:card-side bg-base-100 drop-shadow-lg">
            <figure className="lg:w-[35%] ">
              <img
                className="rounded-lg"
                src={project.imageUrl}
                alt={project.title}
              />
            </figure>
            <div className="card-body md:w-[65%]">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <h2>Features:</h2>
              <ul>
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>- {feature}</li>
                ))}
              </ul>
              <div className="flex gap-4">
                <button className="flex items-center gap-2">
                  <FaGlobe />
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Live Link
                  </a>
                </button>
                <button className="flex gap-2 items-center">
                  <FaGithub />
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Code Link
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
