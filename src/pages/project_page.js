import React from "react";
import { useParams } from "react-router-dom";
import MoveToLeft from "../motion/transitions";
import Navigation from "../components/navigation";

const ProjectPage = () => {
  const { name } = useParams();

  return (
    <div className="max-w-1200 w-full min-h-screen mx-auto bg-darkblue border-x border-blue30">
      <Navigation />
      <MoveToLeft>
        <h1 className="text-8xl py-20 text-orange font-semibold">
          Project: {name}
        </h1>
        <p className="text-lg">
          This is a draft page for project <strong>{name}</strong>. You can add
          more details about the project here, such as description, images, and
          other content.
        </p>
      </MoveToLeft>
    </div>
  );
};

export default ProjectPage;
