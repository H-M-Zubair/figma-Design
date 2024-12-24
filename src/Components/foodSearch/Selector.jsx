import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const CustomDropdown = ({ options, selectedOption, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 w-[360px] h-[44px] rounded-lg  border cursor-pointer bg-white"
      >
        <div className="flex justify-between">
          <div>{selectedOption || label}</div>
          <div>
            <RiArrowDropDownLine size={30} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg z-50">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-[#E9FBF2] hover:text-black"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
