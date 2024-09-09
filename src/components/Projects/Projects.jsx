import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <a href="https://github.com/Subhankar-ux/AirbnbCloneProject/tree/master">
          <ProjectCard
            title="AirBnb WebSite Clone"
            main="this is a website that connects people looking for short-term accommodations with people who want to rent out their homes. It offers a variety of properties, including:
          Single rooms, Apartments, Houses, Houseboats, Castles, Treehouses, Tiny homes, and Caves. 
          "
          />
        </a>
        <a href="https://github.com/Subhankar-ux/pixaBayClone">
          <ProjectCard
            title="pixaBayClone"
            main="It will show ,the different categories of images according to different cities. Categories involved likes- Foods, Buildings,Nature etc. It's a frontend project built using React.js and Bootstrap framework."
          />
        </a>
        <a href="https://github.com/Subhankar-ux/SimonGameMiniProject">
          <ProjectCard
            title="simonGame"
            main="it is a gaming project that you have to remeber each steps according to game progresses and continue. You have to click on the same images in the same sequence as you have pressed before.It is a basic javascript frontend project."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
