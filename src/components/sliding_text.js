import React from "react";

const SlidingText = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap absolute w-full py-2 border-y border-slate-700 bg-slate-800">
      <div className="inline-block text-slate-200 sliding-text tracking-wide">
        {[...Array(5)].map((_, index) => (
          <React.Fragment key={index}>
            <span className="px-4">{text}</span>
            {index < 4 && (
              <span className="mx-2 border-l border-slate-200 h-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SlidingText;
