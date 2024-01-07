import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full text-white lg:px-40 px-10 pt-40 bg-transparent">
      <div className="max-w-screen-lg flex flex-col justify-center p-4">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h1>
        </div>
        <div>
          <p className="mt-20 text-xl text-gray-400">
            I'm a Computer Science graduate from IIT Palakkad. I enjoy
            problem-solving and like building stuff. I like crafting elegant
            solutions, and am fascinated by the beauty of meticulously written
            clean code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
