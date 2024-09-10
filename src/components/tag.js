export const Tag = ({ tags }) => {
  return (
    <div className="flex items-center text-white opacity-70 group-hover:text-orange group-hover:opacity-100">
      {tags &&
        tags.map((name, index) => (
          <>
            <div key={index} className="text-xs mx-3">
              {name}
            </div>
            {index !== tags.length - 1 && (
              <div className="h-4 w-px bg-white opacity-70"></div>
            )}
          </>
        ))}
    </div>
  );
};
