import React from "react";
import AboutImg from "../../assets/image2.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
    id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
    shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="text-2xl md:font-bold ">About</div>
      <div className="md:flex flex-wrap flex-col md:flex-row items-center">
        <img className="md:h-80 ml-10 md:ml-4" src={AboutImg} alt="About img" />

        <ul>
          <div className="flex gap-3 py-4 ">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Hello, I am an Backend Developer as well as cloud enthusiastic.
                I have worked on some popular backend technologies like
                Node.js,SpringBoot framework, MongoDb, SQL databases and also
                deployed on some cloud platforms like vercel,aws. I have also
                good knowledge of basic DSA as I have solved over 400+ dsa
                problems on various platforms like LeetCode, GeeksForGeeks etc.
              </p>
            </span>
          </div>
          <div className="flex gap-3 py-4 ">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Hello, I am also a Frontend Developer. I have worked on some
                popular frontend technologies like React.js,Bootstrap,Tailwind
                Css framework and also deployed on some cloud platforms like
                vercel,aws.I have also good communication skill and leadership
                skills as I have already leaded a team into a project and also
                volunteered in various events.
              </p>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
