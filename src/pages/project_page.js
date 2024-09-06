import React from "react";
import { useParams } from "react-router-dom";
import MoveToLeft from "../motion/transitions";

const ProjectPage = () => {
  const { name } = useParams();

  return (
    <MoveToLeft>
      <div className="p-8 bg-kokshil min-h-screen  text-white">
        <h1 className="text-4xl font-bold mb-4">Project: {name}</h1>
        <p className="text-lg">
          This is a draft page for project <strong>{name}</strong>. You can add
          more details about the project here, such as description, images, and
          other content.
        </p>
      </div>
    </MoveToLeft>
  );
};

export default ProjectPage;
