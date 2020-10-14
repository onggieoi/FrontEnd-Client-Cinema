import React, { useState } from 'react';
import {
  Search, Plus, Printer, FileText,
} from 'react-feather';
import Table from 'components/Table';

const CustomersPage = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDrop = () => {
    setDropDown(!dropDown);
  };

  const isDrop = () => {
    if (dropDown) return 'show';
    return '';
  };

  console.log(process.env.EX);

  return (
    <>
      <div className='top-bar'>
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
          Customers
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
          <button className="button text-white bg-theme-1 shadow-md mr-2">Add New Product</button>
          <div className="dropdown relative">
            <button onClick={handleDrop}
              className="dropdown-toggle button px-2 box text-gray-700">
              <span className="w-5 h-5 flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </span>
            </button>
            <div className={`dropdown-box mt-10 absolute w-40 top-0 left-0 z-20 ${isDrop()}`}>
              <div className="dropdown-box__content box p-2">
                <a className="flex items-center p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">
                  <Printer className="w-4 h-4 mr-2" /> Print </a>
                <a className="flex items-center p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">
                  <FileText className="w-4 h-4 mr-2" /> Export to PDF </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-auto mt-3 ml-auto">
            <div className="w-56 relative text-gray-700">
              <input type="text" placeholder="Search..."
                className="input w-56 box pr-10 placeholder-theme-13" />
              <Search className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
            </div>
          </div>
        </div>

        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <Table />
        </div>
      </div>
    </>
  );
};

export default CustomersPage;
