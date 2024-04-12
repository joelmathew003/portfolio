import React from "react";

const Contact = () => {
  const form_style =
    "p-2 bg-transparent border-b-2 text-white focus:outline-0 focus:border-blue-500 transition-all duration-300 border-gray-500";
  return (
    <div
      name="contact"
      className="text-white w-full md:px-40 px-10 pt-20 bg-transparent pb-12">
      <div className="flex flex-col p-4 justify-center mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 font-heading">
            Contact 
          </p>
          <p className="py-6 text-gray-400 font-textBody text-lg">
            If you want to connect, drop me a message below or email me at <a className="text-blue-500 hover:text-blue-300 duration-200" href="mailto:joelsammathew@gmail.com">joelsammathew@gmail.com</a>. I'd love to get in touch.
          </p>
        </div>

        <div className="flex justify-center items-center font-textBody">
          <form
            action="https://getform.io/f/48589f64-52ba-4696-b1c7-5515fa399584"
            method="POST"
            className="flex flex-col w-full md:w-1/2 border-gray-900 gap-3 font-textBody">
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
              rows="6"
              className={form_style}></textarea>
            <button className="font-heading hover:tracking-[0.05em] m-10 text-black bg-slate-400 py-3 items-center hover:bg-slate-200 duration-200 text-xl text-bold rounded-md">
              Send :)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
