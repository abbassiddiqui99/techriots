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
    <div className="bg-black/5 shadow-md flex justify-center items-center flex-col">
      <div className="container px-32 flex mx-auto py-8 gap-20 justify-center">
        <div className="flex-1 justify-center flex flex-col">
          <div className="mb-6">LOGO</div>
          <div className="text-base font-normal text-black/80">
            Ksolves India Limited is a leading Software Development Company
            focused on working in high-end technologies like Big Data, Machine
            Learning, Salesforce®, Odoo etc. With a team of 410+
            developers/architects, the software development agency has won the
            trust of several clients all around the world.
          </div>
        </div>
        <div className="flex-1 justify-center flex">
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-lg font-semibold uppercase">Company</div>
            <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
              ABOUT
            </div>
            <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
              ABOUT
            </div>
            <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
              ABOUT
            </div>
            <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
              ABOUT
            </div>
            <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
              ABOUT
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex-1 flex flex-col gap-2">
              <div className="text-lg font-semibold uppercase">Quick Link</div>
              <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
                ABOUT
              </div>
              <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
                ABOUT
              </div>
              <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
                ABOUT
              </div>
              <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
                ABOUT
              </div>
              <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
                ABOUT
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-center flex">
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-lg font-semibold uppercase">CONTACT US</div>
            <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
              ABOUT
            </div>
            <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
              ABOUT
            </div>
            <div className="hover:translate-x-2 hover:text-red-500 cursor-pointer ease-in-out transition delay-75">
              ABOUT
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 py-4 w-full mx-auto flex justify-center">
        <div>Copyright 2023© Ksolves.com | All Rights Reserved</div>
      </div>
    </div>
  );
};

export default index;
