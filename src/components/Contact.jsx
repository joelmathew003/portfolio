import React from "react";

const Contact = () => {
  const form_style = "p-2 bg-transparent border-b-2 text-white focus:outline-0 focus:border-blue-500 transition-all duration-300 border-gray-500"
  return (
    <div name="contact" className="text-white w-full md:px-40 px-10 pt-40 bg-transparent">
      <div className="flex flex-col p-4 justify-center mx-auto h-full">
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
            className="flex flex-col w-full md:w-1/2 border-gray-500 gap-3">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={form_style}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className={form_style}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className={form_style}></textarea>
            
            <button className="text-black bg-slate-400 py-3 items-center hover:bg-slate-200 duration-200 text-xl text-bold rounded-md">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
