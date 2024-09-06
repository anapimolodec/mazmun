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

        {/* You can add more content, such as images, details, etc. */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Project Details</h2>
          <p className="text-md">
            More information about the project will go here.
          </p>
        </div>
      </div>
    </MoveToLeft>
  );
};

export default ProjectPage;
