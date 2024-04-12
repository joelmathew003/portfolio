import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full text-white lg:pl-40 px-10 pt-40 bg-transparent">
      <div className="max-w-screen-lg flex flex-col justify-center p-4">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 font-heading">
            About
          </h1>
        </div>
        <div className="flex flex-col justify-normal gap-8">
          <p className="mt-20 text-xl text-gray-400 font-textBody">
            I'm a passionate developer with an interest in networking and
            cybersecurity domains. I enjoy problem solving and crafting clean
            and elegant solutions.
          </p>
          <p className="text-xl text-gray-400 font-textBody">
            Beyond coding, I love learning new things, along with indulging in
            travel, video games, football, and playing the piano.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
