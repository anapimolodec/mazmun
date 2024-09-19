import { Fragment } from "react";

const isURL = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

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
        ) : isURL(value) ? (
          <a
            href={value}
            className="hover:text-teal-400 break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-white col-span-2">{value}</p>
        )}
      </div>
    </div>
  );
};
