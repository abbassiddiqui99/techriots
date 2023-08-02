import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import HeaderDropdown from "../Dropdown/HeaderDropdown";

const dropdownListOptions = [
  { label: "Option 1", href: "#" },
  { label: "Option 2", href: "#" },
  { label: "Option 3", href: "#" },
];

const index = () => {
  return (
    <div className="bg-white shadow-md h-16 flex justify-center items-center">
      <div className="container flex justify-between items-center px-32">
        <div className="">Left Icon</div>
        <div className="flex justify-between items-center gap-x-8">
          <div>
            <HeaderDropdown label="Services" options={dropdownListOptions} />
          </div>
          <div>
            <HeaderDropdown label="Company" options={dropdownListOptions} />
          </div>
          <div>
            <HeaderDropdown label="Insight" options={dropdownListOptions} />
          </div>
          <div className="font-medium text-sm">Blogs</div>
          <div>
            <div className="bg-red-600 text-white font-medium text-sm px-4 py-2 rounded-md flex justify-center items-center gap-x-2">
              <div>
                <BsTelephoneFill />
              </div>
              <div>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
