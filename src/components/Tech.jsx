import React from "react";
import Go from "../assets/tech/go.png";
import Py from "../assets/tech/python.png";
import Cpp from "../assets/tech/cpp.png";
import Sql from "../assets/tech/sql.png";
import React_img from "../assets/tech/react.png";
import Linux from "../assets/tech/linux.png";
import K8s from "../assets/tech/k8s.png";
import Docker from "../assets/tech/docker.png";
import Postgres from "../assets/tech/postgres.png";
import Azure from "../assets/tech/azure-pipelines.png";
import Tailwind from "../assets/tech/tailwind.png";
import Tf from "../assets/tech/tf.png";
import Pytorch from "../assets/tech/pytorch.png";

const Tech = () => {
  const techs = [
    { id: 1, name: "Go", img_src: Go },
    { id: 2, name: "Python", img_src: Py },
    { id: 3, name: "C/C++", img_src: Cpp },
    { id: 4, name: "SQL", img_src: Sql },
    { id: 5, name: "React", img_src: React_img },
    { id: 6, name: "Linux", img_src: Linux },
    { id: 7, name: "K8s", img_src: K8s },
    { id: 8, name: "Docker", img_src: Docker },
    { id: 9, name: "Postgres", img_src: Postgres },
    { id: 10, name: "Azure Pipelines", img_src: Azure },
    { id: 11, name: "Tailwind", img_src: Tailwind },
    { id: 12, name: "Keras", img_src: Tf },
    { id: 13, name: "Pytorch", img_src: Pytorch },
  ];
  return (
    <div className="text-white h-full w-full md:px-40 px-10">
      <div className="flex flex-col p-4 justify-center w-full  lg mx-auto h-full">
        <div className="">
          <p className="py-4 text-xl text-gray-400">I have tinkered with stuff like</p>
        </div>
        <div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 md:px-12 sm:px-0">
            {techs.map(({ id, name, img_src }) => (
              <div className="flex justify-normal items-center p-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-all duration-200">
                <img className="h-12 pr-4 w-30" src={img_src} alt=""></img>
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
