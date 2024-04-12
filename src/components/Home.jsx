import React, { useState } from "react";
import Dp from "../assets/dp.png";
import Typewriter from "typewriter-effect";
import Art from "./Art";

const Home = () => {
  const [art, setArt] = useState(false);
  const switchHandler = () => {
    setArt(~art);
  };
  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center md:justify-between h-full px-10 md:flex-row">
        <div className="flex flex-col justify-center h-1/2 gap-4 text-white md:w-1/2 w-full">
          <div className="flex font-heading">
            <h2 className="text-4xl sm:text-7xl font-bold text-white intro-text pr-4 ">
              Hi,{" "}
            </h2>
            <h2 className="text-4xl sm:text-7xl font-bold text-white intro-text-2 ">
              I'm Joel
            </h2>
          </div>
          <div className="text-gray-400 text-xl delay-700 tracking-widest h-8 font-textBody">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(500)
                  .changeDelay(35)
                  .typeString("I like crafting code and shaping ideas")
                  .start();
              }}
            />
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full mx-auto h-96">
              {art ? (
                <Art />
              ) : (
                <img
                  src={Dp}
                  alt="my profile"
                  className="md:w-full rounded-3xl"
                />
              )}
            </div>
          </div>
          <div
            className="absolute -bottom-14 right-3 text-gray-400 cursor-pointer duration-200 text-5xl hover:text-green-200"
            onClick={switchHandler}
            style={{
              transform: `scaleX(${art ? "-1" : "1"})`,
            }}>
            {/* {art ? <span>&#8592;</span> : <span>&#8594;</span>} */}
            <span>&#8594;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
