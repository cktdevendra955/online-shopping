import Link from "next/link";
import React from "react";

const SidebarNavLinkUI = ({hrefLink,title}) => {
  return (
    <li>
      <Link
        href={hrefLink}
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4M9 3h6a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z"
            ></path>
          </svg>
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">{title}</span>
        {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
          New
        </span> */}
      </Link>
    </li>
  );
};

export default SidebarNavLinkUI;
