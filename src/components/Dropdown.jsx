import { useState } from "react";

export const DropOp = ({ name, options }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-4/5 py-2 bg-white text-black rounded-lg border border-black"
      >
        {name} ▼
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-4/5 bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map((option) => (
            <a
              key={option.name}
              href={option.link}
              onClick={() => setOpen(!open)}
              className="block py-2 hover:bg-gray-100"
            >
              {option.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
