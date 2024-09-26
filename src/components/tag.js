import { Fragment } from "react";
export const Tag = ({ tags }) => {
  return (
    <div className="flex items-center text-white opacity-70 group-hover:text-teal-400 group-hover:opacity-100">
      {tags &&
        tags.map((name, index) => (
          <Fragment key={index}>
            <div className="text-xs mx-3 text-right w-min md:w-fit break-keep">
              {name}
            </div>
            {index !== tags.length - 1 && (
              <div className="h-4 w-px bg-white opacity-70"></div>
            )}
          </Fragment>
        ))}
    </div>
  );
};
