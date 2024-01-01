import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full text-white px-40 py-40 bg-transparent">
      <div className="max-w-screen-lg flex flex-col justify-center p-4">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h1>
        </div>
        <div>
          <p className="mt-20 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ut metus in eros condimentum lacinia. Nam tempor eros eu accumsan
            laoreet. Duis malesuada ornare elit, id suscipit dui vestibulum id.
            Integer massa metus, porta vel urna ut, ultrices ornare velit. Donec
            nec facilisis ex. Vivamus magna orci, lobortis quis malesuada a,
            hendrerit eget purus. Praesent at augue vulputate, viverra elit a,
            viverra nisl. Etiam interdum, dui et maximus pretium, leo orci
            tempus nisl, et cursus tortor eros ut libero. Pellentesque commodo
            pulvinar lacinia. Pellentesque odio nibh, tincidunt tristique
            dignissim egestas, varius et turpis. Cras efficitur id nibh eget
            bibendum. Ut id arcu vitae mi consequat finibus. Curabitur eros ex,
            maximus nec eros vel, mattis iaculis nulla. Nullam et nisl
            facilisis, commodo est eget, vestibulum sapien. Fusce blandit mollis
            pretium. Morbi ut dapibus erat. Quisque commodo tellus et tempor
            feugiat. Cras volutpat, tortor vel sodales porta, dui enim finibus
            est, sit amet porttitor lectus turpis sit amet leo. Integer velit
            orci, tempus sed fringilla a, dictum vitae elit. Sed gravida finibus
            sem et iaculis. Pellentesque risus urna, tempor sed velit et,
            tincidunt consectetur diam. Morbi sed sapien odio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
