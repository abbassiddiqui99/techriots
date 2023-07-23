'use client'

import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi'

const HeaderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
      <button className='flex justify-center items-center'>
        Dropdown
        <FiChevronDown className="-mr-1 ml-2 h-4 w-4" />
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            onMouseEnter={openDropdown} // Keep the dropdown open while hovering over it
            onMouseLeave={closeDropdown} // Close the dropdown when the mouse leaves
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Option 3
              </a>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default HeaderDropdown;