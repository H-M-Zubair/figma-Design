import { useState } from "react";
import DropdownSelector from "./Selector";

const FoodSearch = () => {
  // State to store selected options for each dropdown
  const [selectedOptions, setSelectedOptions] = useState({
    Dinning: "",
    "Select All": "",
    "Select Sub Category": "",
    Lahore: "",
    Destination: "",
  });

  const options = ["Dining", "Takeaway", "Other"];

  const handleSelect = (label, option) => {
    // Update the specific dropdown's selected option based on its label
    setSelectedOptions((prev) => ({
      ...prev,
      [label]: option,
    }));
  };

  return (
    <div className="container mx-auto m-4 p-4 shadow-2xl -mt-16 border-[1px] border-gray-200 rounded-xl relative bg-white z-50">
      <div className="flex items-center justify-center space-x-4">
        <DropdownSelector
          options={options}
          selectedOption={selectedOptions["Dinning"]}
          onSelect={(option) => handleSelect("Dinning", option)}
          label={"Dinning"}
        />
        <DropdownSelector
          options={options}
          selectedOption={selectedOptions["Select All"]}
          onSelect={(option) => handleSelect("Select All", option)}
          label={"Select All"}
        />
        <DropdownSelector
          options={options}
          selectedOption={selectedOptions["Select Sub Category"]}
          onSelect={(option) => handleSelect("Select Sub Category", option)}
          label={"Select Sub Category"}
        />
      </div>

      <div className="flex mt-2 items-center justify-center space-x-4">
        <DropdownSelector
          options={options}
          selectedOption={selectedOptions["Lahore"]}
          onSelect={(option) => handleSelect("Lahore", option)}
          label={"Lahore"}
        />
        <DropdownSelector
          options={options}
          selectedOption={selectedOptions["Destination"]}
          onSelect={(option) => handleSelect("Destination", option)}
          label={"Destination"}
        />
        <div className="flex items-center gap-2 px-2 w-[288px] h-[44px] rounded-xl border-gray-200 border-[1px]">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75217 0.726562C15.0605 0.726562 19.3637 4.93475 19.3637 10.1258C19.3637 12.5756 18.4053 14.8065 16.8352 16.4795L19.9231 19.4902C20.2126 19.7725 20.2132 20.2308 19.9245 20.5139C19.662 20.7712 19.2509 20.7951 18.9608 20.5852L18.8777 20.5152L15.7533 17.4683C14.1088 18.7554 12.0224 19.5251 9.75217 19.5251C4.44386 19.5251 0.140625 15.3169 0.140625 10.1258C0.140625 4.93475 4.44386 0.726562 9.75217 0.726562ZM9.75217 2.1743C5.26148 2.1743 1.62106 5.73432 1.62106 10.1258C1.62106 14.5173 5.26148 18.0773 9.75217 18.0773C14.2429 18.0773 17.8833 14.5173 17.8833 10.1258C17.8833 5.73432 14.2429 2.1743 9.75217 2.1743Z"
              fill="#717171"
            />
          </svg>
          <span>
            <input type="text" placeholder="Search..." />
          </span>
        </div>
        <button className="bg-darkGreenButton text-white w-[120px] h-[46px] rounded-[35px]">
          Explore
        </button>
      </div>
    </div>
  );
};

export default FoodSearch;
