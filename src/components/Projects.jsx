import React from "react";
import GithubPic from "../assets/github.png";
import Tiger from "../assets/projects/tiger.png";
import Plexshare from "../assets/projects/plexshare.png";
import Sentiment from "../assets/projects/sentiment.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      project_name: "PlexShare",
      project_desc:
        "s malesuada ornare elit, id suscipit dui vestibulum idInteger massa metus, porta vel urna ut, ultrices ornare velit. Donecnec facilisis ex. Vivamus magna orci, lobortis quis malesuada a,hendrerit eget purus. Praesent at augue vulputate, viverra elit a,      viverra nisl. Etiam interdum, dui et ",
      img_src: Plexshare,
      github_link:"https://github.com/joelmathew003/PlexShare"
    },
    {
      id: 2,
      project_name: "Tiger Compiler",
      project_desc:
        "s malesuada ornare elit, id suscipit dui vestibulum idInteger massa metus, porta vel urna ut, ultrices ornare velit. Donecnec facilisis ex. Vivamus magna orci, lobortis quis malesuada a,hendrerit eget purus. Praesent at augue vulputate, viverra elit a,      viverra nisl. Etiam interdum, dui et ",
     img_src: Tiger,
    },
    {
      id: 3,
      project_name: "Sentiment Analyser",
      project_desc:
        "s malesuada ornare elit, id suscipit dui vestibulum idInteger massa metus, porta vel urna ut, ultrices ornare velit. Donecnec facilisis ex. Vivamus magna orci, lobortis quis malesuada a,hendrerit eget purus. Praesent at augue vulputate, viverra elit a,      viverra nisl. Etiam interdum, dui et ",
     img_src: Sentiment,
    },
    {
      id: 4,
      project_name: "Some Project",
      project_desc:
        "s malesuada ornare elit, id suscipit dui vestibulum idInteger massa metus, porta vel urna ut, ultrices ornare velit. Donecnec facilisis ex. Vivamus magna orci, lobortis quis malesuada a,hendrerit eget purus. Praesent at augue vulputate, viverra elit a,      viverra nisl. Etiam interdum, dui et ",
     img_src: GithubPic,
    },
  ];
  return (
    <div className="h-full w-full text-white px-40 py-40 bg-transparent">
      <div className="flex w-full flex-col justify-center p-4">
        <div className="text-4xl font-bold ">
          <h1 className="inline border-b-4 border-gray-500">Projects</h1>
        </div>
        <div className="flex flex-col w-full gap-8 mt-20">
          {projects.map(({ id, project_name, project_desc, img_src, github_link }) => (
            <div className="flex justify-stretch">
              <div className="w-2/3 ">
                <div className="flex flex-col py-2">
                  <h2 className="text-2xl">{project_name}</h2>
                </div>
                <div className="w-full">
                  <p>{project_desc}</p>
                </div>
              </div>
              <div className="items-center flex w-1/3">
                <a href={github_link} className="place-self-center">
                  <img src={img_src} alt="" className="h-28" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
