import React from "react";
import GithubPic from "../assets/github.png";
import Tiger from "../assets/projects/tiger.png";

const Projects = () => {
  const projects = [
    { id: 1, project_name: "PlexShare", img_src: GithubPic },
    { id: 2, project_name: "Tiger Compiler", img_src: Tiger },
    { id: 3, project_name: "Sentiment Analyser", img_src: GithubPic },
  ];
  return (
    <div className="h-screen w-full text-white px-40 py-40 bg-transparent">
      <div className="flex max-w-screen-lg flex-col justify-center p-4">
        <div className="text-4xl font-bold ">
          <h1 className="inline border-b-4 border-gray-500">Projects</h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-8">
          {projects.map(({ id, project_name, img_src }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg items-center flex flex-col p-6">
              <img className="" src={img_src} alt="" />
              <div className="py-4 items-center w-full text-center">{project_name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
