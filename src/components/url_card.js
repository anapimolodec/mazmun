export const URLCard = ({ name, array, placeholder }) => {
  return (
    <div className="mb-4 grid grid-cols-3">
      <h4 className="text-sm font-medium text-teal-400">
        {name.toUpperCase()}
      </h4>
      <div className="col-span-2">
        {Array.isArray(array) && array.length > 0 ? (
          array.map((item, index) => (
            <div key={index} className="mb-1">
              <a
                href={item.value}
                className="hover:text-teal-400 break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </div>
          ))
        ) : (
          <p>{placeholder}</p>
        )}
      </div>
    </div>
  );
};
