import React from "react";
import Go from "../assets/tech/go.png";
import Py from "../assets/tech/python.png";
import Cpp from "../assets/tech/cpp.png";
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
    { name: "Go", img_src: Go },
    { name: "Python", img_src: Py },
    { name: "C/C++", img_src: Cpp },
    { name: "React", img_src: React_img },
    { name: "Tailwind", img_src: Tailwind },
    { name: "Postgres", img_src: Postgres },
    { name: "Linux", img_src: Linux },
    { name: "K8s", img_src: K8s },
    { name: "Docker", img_src: Docker },
    { name: "Azure Pipelines", img_src: Azure },
    { name: "Keras", img_src: Tf },
    { name: "Pytorch", img_src: Pytorch },
  ];
  return (
    <div className="text-white h-full w-full md:pr-40 px-10 md:mt-64">
      <div className="flex flex-col p-4 justify-center w-full  lg mx-auto h-full">
        <div className="">
          <p className="py-4 text-xl text-gray-400 font-textBody ">
            I have tinkered with tech like
          </p>
        </div>
        <div>
          <div className="w-full grid grid-cols-4 sm:grid-cols-5 gap-4 text-center sm:px-0">
            {techs.map(({ id, name, img_src }) => (
              <div className="items-center p-2 rounded-md hover:bg-slate-700 duration-200">
                <img
                  className="h-12 m-auto"
                  src={img_src}
                  alt=""
                  title={name}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
