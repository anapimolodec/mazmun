import { Fragment } from "react";

export const InfoCard = ({ name, value }) => {
  return (
    <div className="mb-4 grid grid-cols-3">
      <h4 className="text-sm font-medium text-teal-400">
        {name.toUpperCase()}
      </h4>
      <div className="col-span-2">
        {Array.isArray(value) ? (
          value.map((item, index) => (
            <Fragment key={index}>
              <div className="break-words">{item}</div>
              {index !== value.length - 1 && (
                <div className=" w-px bg-white opacity-70"></div>
              )}
            </Fragment>
          ))
        ) : (
          <p className="text-white col-span-2">{value}</p>
        )}
      </div>
    </div>
  );
};
