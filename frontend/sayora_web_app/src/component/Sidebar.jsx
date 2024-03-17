import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed w-64 h-full px-4 py-2 bg-[#EFF7F8]">
      <div className="my-4 mb-4">
        <h1 className="font-bold text-3x text-[#324054]">Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-[#324054] font-bold">
        <li className="py-2 mb-2 rounded hover:shadow hover:bg-[#16ACBD] hover:text-white">
          <a href="" className="px-3">
            Home
          </a>
        </li>
        <li className="py-2 mb-2 rounded hover:shadow hover:bg-[#16ACBD] hover:text-white">
          <a href="" className="px-3">
            Home
          </a>
        </li>
        <li className="py-2 mb-2 rounded hover:shadow hover:bg-[#16ACBD] hover:text-white">
          <a href="" className="px-3">
            Home
          </a>
        </li>
        <li className="py-2 mb-2 rounded hover:shadow hover:bg-[#16ACBD] hover:text-white">
          <a href="" className="px-3">
            Home
          </a>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
