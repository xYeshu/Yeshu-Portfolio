"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import CertCards from "../sub/Certcards";
import Exp from "../sub/Exp";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="Exp">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Experience
      </h1>

      <Exp />

      <h1 id="pro" className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>

      <div
        className=" flex flex-wrap  justify-center items-center gap-10 px-10 cursor-pointer "
      >
        <a  className="w-[350px] h-[400px] flex flex-col cursor-pointer z-50  rounded-lg ">
          <ProjectCard
            src="/NextWebsite.png"
            title="GPT Bharat"
            description="[In Progress] A full stack industry ready App inspired from Chat GPT with modern features. Tech stack used: HTML,CSS,Javascript, Node js, Typescript, Express , Mongo DB, Postman, Tailwind, OAuth"
          />
          
        </a>

        <a  className="w-[350px] h-[400px] flex flex-col z-50 ">
          <ProjectCard
            src="/CardImage.png"
            title="File Exterminator"
            description="A CLI-based Python tool that allows you to completely wipe a file from disk, possibly rendering file recovery tools and techniques useless. It allows users to securely delete confidential data making it impossible for any recovery software or techniques to recover the data. This tool uses methods like the US DOD Secure Deletion and Guttman methods."
          />
        </a>

        <a className="w-[350px] h-[400px] flex flex-col z-50 ">
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Eye-Controlled Mouse"
            description="A tool to operate a computer mouse without touching it merely via eye movements. The webcam is used to track eye movements, and an eye blink simulates a right-click, enabling users to operate the system without physically touching the mouse."
          />
        </a>
      </div>


      <h1 id="pro" className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Certificates
      </h1>
      <div
        className="h-full w-full flex flex-wrap justify-center content-center gap-10"
      >
        <div className="w-[400px] h-[400px] flex flex-col cursor-pointer">
          <CertCards
            src="/googleC.png"
            title="GPT Bharat"
            description="[In Progress] A full stack industry ready App inspired from Chat GPT with modern features. Tech stack used: HTML,CSS,Javascript, Node js, Typescript, Express , Mongo DB, Postman, Tailwind, OAuth"
          />
        </div>

        <div className="w-[400px] h-[400px] flex flex-col">
          <CertCards
            src="/udemy.png"
            title="File Exterminator"
            description="A CLI-based Python tool that allows you to completely wipe a file from disk, possibly rendering file recovery tools and techniques useless. It allows users to securely delete confidential data making it impossible for any recovery software or techniques to recover the data. This tool uses methods like the US DOD Secure Deletion and Guttman methods."
          />
        </div>

        <div className="w-[400px] h-[400px] flex flex-col">
          <CertCards
            src="/eccouncil.png"
            title="Eye-Controlled Mouse"
            description="A tool to operate a computer mouse without touching it merely via eye movements. The webcam is used to track eye movements, and an eye blink simulates a right-click, enabling users to operate the system without physically touching the mouse."
          />
        </div>
        <div className="w-[400px] h-[400px] flex flex-col">
          <CertCards
            src="/skillfront.png"
            title="Eye-Controlled Mouse"
            description="A tool to operate a computer mouse without touching it merely via eye movements. The webcam is used to track eye movements, and an eye blink simulates a right-click, enabling users to operate the system without physically touching the mouse."
          />
        </div>
        <div className="w-[400px] h-[400px] flex flex-col">
          <CertCards
            src="/eccouncil2.png"
            title="Eye-Controlled Mouse"
            description="A tool to operate a computer mouse without touching it merely via eye movements. The webcam is used to track eye movements, and an eye blink simulates a right-click, enabling users to operate the system without physically touching the mouse."
          />
        </div>
        <div className="w-[400px] h-[400px] flex flex-col">
          <CertCards
            src="/udemy2.png"
            title="Eye-Controlled Mouse"
            description="A tool to operate a computer mouse without touching it merely via eye movements. The webcam is used to track eye movements, and an eye blink simulates a right-click, enabling users to operate the system without physically touching the mouse."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
