import React from "react";
import Dp from "../assets/dp.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center md:justify-between h-full px-10 md:flex-row">
        <div className="flex flex-col justify-center h-1/2 gap-4  text-white">
          <div className="flex ">
            <h2 className="text-4xl sm:text-7xl font-bold text-white intro-text pr-4 font-textBody">
              Hi,{" "}
            </h2>
            <h2 className="text-4xl sm:text-7xl font-bold text-white intro-text-2 font-textBody">
              I'm Joel
            </h2>
          </div>
          {/* <p className="text-gray-400 max-w-md text-xl typewriter-text">I like crafting code and shaping ideas</p> */}
          <div className="typewriter-text text-gray-400 max-w-md text-xl delay-700 tracking-widest ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .changeDelay(35)
                  .typeString("I like crafting code and shaping ideas")
                  .start();
              }}
            />
          </div>
        </div>
        <div className="">
          <img
            src={Dp}
            alt="my profile"
            className="mx-auto w-2/3 md:w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
