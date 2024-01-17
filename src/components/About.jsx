import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full text-white lg:px-40 px-10 pt-40 bg-transparent">
      <div className="max-w-screen-lg flex flex-col justify-center p-4">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 font-heading">
            About
          </h1>
        </div>
        <div className="flex flex-col justify-normal gap-8">
          <p className="mt-20 text-xl text-gray-400 font-textBody">
            I'm a developer who enjoys problem-solving and likes building stuff,
            with an interest in networking and cybersecurity. I like crafting
            elegant solutions, and am fascinated by the beauty of meticulously
            written clean code.
          </p>
          <p className="text-xl text-gray-400 font-textBody">
            I also love learning new stuff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
