import React, { useState } from "react";
import Andro from "../assets/projects/andro.png";
import Tiger from "../assets/projects/tiger.png";
import Plexshare from "../assets/projects/plexshare.png";
import Sentiment from "../assets/projects/sentiment.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [hovered, setHovered] = useState(null);
  const projects = [
    {
      id: 1,
      project_name: "PlexShare",
      project_desc:
        "Contributed to a lab session monitoring app, focusing on critical functionalities within the whiteboard module. Key contributions included session loading and saving, data serialization, and inter-module networking.",
      img_src: Plexshare,
      github_link: "https://github.com/joelmathew003/PlexShare",
    },
    {
      id: 2,
      project_name: "Tiger Compiler",
      project_desc:
        "Developed a compiler for the Tiger Language written in Standard ML, based on the book by Andrew W. Appel. Leveraged ML-LEX for lexing, ML-YACC for parsing, generating MIPS assembly code as output. ",
      img_src: Tiger,
      github_link: "https://github.com/joelmathew003/Tiger-Compiler",
    },
    {
      id: 3,
      project_name: "Sentiment Analyser",
      project_desc:
        "Utilized Keras LSTM models and trained on MFCC representations to analyze emotions within audio samples. Crafted a simple web app interface using Streamlit, allowing users to input audio for real-time sentiment predictions and deployed it on Heroku",
      img_src: Sentiment,
      github_link: "https://github.com/joelmathew003/Sentiment-Analysis",
    },
    {
      id: 4,
      project_name: "Android Malware detection using GNN",
      project_desc:
        "A research-oriented project exploring Android malware detection with Graph Neural Network Models and Explainable AI concepts. Strives for efficient detection with low computation costs.",
      img_src: Andro,
      github_link: "https://github.com/joelmathew003/Android-Malware-Detection",
    },
  ];
  return (
    <div
      name="projects"
      className="h-full w-full text-white md:px-40 px-10 py-40 bg-transparent">
      <div className="flex w-full flex-col justify-center p-4">
        <div className="text-4xl font-bold ">
          <h1 className="inline border-b-4 border-gray-500">Projects</h1>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 mt-20 gap-8 w-5/6">
          {projects.map(
            ({ id, project_name, project_desc, img_src, github_link }) => (
              <div
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}>
                <a href={github_link} className="relative group">
                  <img
                    src={img_src}
                    alt=""
                    className={`rounded-md transition ${
                      hovered === id
                        ? "opacity-10 transition duration-500"
                        : "opacity-100 transition duration-500"
                    }`}
                  />
                  {hovered === id && (
                    <div className="-mt-16 absolute inset-0 flex items-center justify-center hover:translate-y-9 transition duration-500 overflow-hidden delay-100">
                      <div className=" flex-col text-gray-400 px-10 gap-8">
                        <div className="flex items-center justify-between py-2">
                          <h1 className="text-xl">{project_name}</h1>
                          <FaGithub className="opacity-50" size={50} />
                        </div>
                        <div className="flex flex-col justify-between">
                          <p className="">{project_desc}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
