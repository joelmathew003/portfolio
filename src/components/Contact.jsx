import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="text-white w-full md:px-40 px-10 pt-40 bg-transparent">
      <div className="flex flex-col p-4 justify-center  mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-gray-400">
            If you want to connect, drop me a message. I'd love to get in touch.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/48589f64-52ba-4696-b1c7-5515fa399584"
            method="POST"
            className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            
            <button className="text-black bg-slate-400 px-5 py-2 my-8 mx-auto flex items-center rounded-md hover:bg-slate-200 duration-100 text-xl text-bold">
              Let's talk!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
