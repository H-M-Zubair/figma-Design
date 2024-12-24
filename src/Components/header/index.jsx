import { useState } from "react";

import DropArrow from "./icons/DropArrow";
import FilterLogo from "./icons/FilterLogo";
import FlagLogo from "./icons/FlagLogo";
import LogonIcon from "./icons/LogonIcon";
import Navigator from "./Navigator/Navigator";
import CenteredCartIcon from "./icons/CentedCartIcon";
import CenteredProfileIcon from "./icons/CenteredProfileIcon";

// Dropdown Menu Component
const DropdownMenu = ({ isDropdownOpen, toggleDropdown, handleSelect }) => (
  <div className="relative">
    {/* Profile and Cart Icon Container */}
    <div className="ml-8 flex items-center gap-3">
      <CenteredCartIcon />
      {/* Only add the toggle to CenteredProfileIcon */}
      <div className="cursor-pointer" onClick={toggleDropdown}>
        <CenteredProfileIcon />
      </div>
    </div>

    {/* Dropdown Menu */}
    {isDropdownOpen && (
      <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
        <div
          className="px-4 py-2 cursor-pointer hover:bg-[#E9FBF2] hover:text-black"
          onClick={() => handleSelect("Customer Login")}
        >
          Customer Login
        </div>
        <div
          className="px-4 py-2 cursor-pointer hover:bg-[#E9FBF2] hover:text-black"
          onClick={() => handleSelect("Merchant Login")}
        >
          Merchant Login
        </div>
      </div>
    )}
  </div>
);

function Header() {
  // State for Dropdown visibility and selected option
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Handle dropdown option selection
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div>
      <div className="h-[44px] flex justify-between items-center px-4 bg-customGreen">
        <div className="flex gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 17.8343C17.6392 17.8343 20.2481 17.1114 20.5 14.2098C20.5 11.3102 18.6812 11.4966 18.6812 7.93889C18.6812 5.15992 16.0452 1.99805 12 1.99805C7.95477 1.99805 5.31885 5.15992 5.31885 7.93889C5.31885 11.4966 3.5 11.3102 3.5 14.2098C3.75295 17.1224 6.36177 17.8343 12 17.8343Z"
              stroke="#219653"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.3888 20.8418C13.0247 22.3565 10.8967 22.3745 9.51947 20.8418"
              stroke="#219653"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1 className="text-white">
            Delivery lead time will be impacted due to COVID-19. Stay safe!
          </h1>
        </div>
        <div className="flex gap-3 pr-4">
          <span className="text-unSelectedLanguage">Select Language: </span>
          <span className="text-white font-bold">English</span>
          <span className="text-unSelectedLanguage">|</span>
          <span className="text-unSelectedLanguage">العربیہ</span>
        </div>
      </div>
      <div className="bg-white h-[140px] w-full">
        <div className="flex h-[80px] items-center justify-between px-[64px] border-b-[1px] border-gray-300">
          <div className="flex gap-10">
            <LogonIcon />
            <div className="h-[40px] gap-3 rounded-full flex items-center px-4 border-green-700 border-[1px]">
              <FlagLogo />
              <span className="font-outfit">Pakistan</span>
              <span className="mt-2 ml-2">
                <DropArrow />
              </span>
            </div>
          </div>
          <div className="flex items-center">
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
            <span className="mx-2">
              <FilterLogo />
            </span>
            <DropdownMenu
              isDropdownOpen={isDropdownOpen}
              toggleDropdown={toggleDropdown}
              handleSelect={handleSelect}
            />
          </div>
        </div>
        <Navigator />
      </div>
    </div>
  );
}

export default Header;
