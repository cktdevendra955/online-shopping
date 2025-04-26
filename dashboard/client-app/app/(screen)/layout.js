"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import sidebarRoutes from "../config/routes/sidebarRoutes";

function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      //{" "}
      <div className="flex min-h-screen bg-gray-50">
        // {/* Sidebar */}
        {isSidebarOpen && (
          <div
            className={`fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r overflow-y-auto transition-transform duration-300 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-64"
            }`}
          >
            <div className="flex items-center justify-center h-14 border-b">
              <div>Sidebar Navigation</div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li>
                  <Link
                    href={"/"}
                    className="mt-4 relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
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
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Dashboard
                    </span>
                  </Link>
                </li>

                {/* <SidebarNavLinkUI  hrefLink={sidebarRoutes.ORDERS} title={"Orders"} />
                <SidebarNavLinkUI  hrefLink={sidebarRoutes.RETURNS} title={"Returns"}/>
                <SidebarNavLinkUI  hrefLink={sidebarRoutes.CATEGORIES} title={"Categories"}/>
                <SidebarNavLinkUI  hrefLink={sidebarRoutes.PRODUCTS} title={"Products"}/>
                <SidebarNavLinkUI  hrefLink={sidebarRoutes.USERS} title={"Users"}/>
                <SidebarNavLinkUI  hrefLink={sidebarRoutes.VENDER} title={"Venders"}/>
                <SidebarNavLinkUI  hrefLink={sidebarRoutes.STORE} title={"Store"}/> */}

                <li>
                  <Link
                    href={sidebarRoutes.ORDERS}
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
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Orders
                    </span>
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                      New
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href={sidebarRoutes.RETURNS}
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
                          d="M3 10h11M9 21l3-3-3-3M21 12a9 9 0 10-9 9"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Returns
                    </span>
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                      New
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href={sidebarRoutes.CATEGORIES}
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
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Category
                    </span>
                    
                  </Link>
                </li>

                <li>
                  <Link
                    href={sidebarRoutes.PRODUCTS}
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
                          d="M3 7l9-4 9 4M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 5m9-5l-9 5m0 0v10"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Products
                    </span>
                    
                  </Link>
                </li>

               
                <li>
                  <Link
                    href={sidebarRoutes.USERS}
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
                          d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M9 9a3 3 0 116 0 3 3 0 01-6 0zM20 21a8 8 0 10-16 0"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Users
                    </span>
                    
                  </Link>
                </li>

                <li>
                  <Link
                    href={sidebarRoutes.VENDER}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m2 8H7a2 2 0 01-2-2V7a2 2 0 012-2h3V4h4v1h3a2 2 0 012 2v11a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>

                    <span className="ml-2 text-sm tracking-wide truncate">
                      Vender
                    </span>
                    
                  </Link>
                </li>

                <li>
                  <Link
                    href={sidebarRoutes.STORE}
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
                          d="M3 9l2-4h14l2 4M4 9h16M4 9v10a2 2 0 002 2h12a2 2 0 002-2V9"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Store
                    </span>
                    
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* Main content */}
        <div
          className={`flex flex-col flex-grow p-6 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          {/* Fixed Header */}
          <header
            className={`fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-10 border-b transition-all duration-300 ${
              isSidebarOpen ? "pl-64" : "pl-0"
            }`}
          >
            <h1 className="text-xl font-bold">Dashboard</h1>
            <button
              className="p-2 bg-gray-200 rounded-md"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <FaBars className="w-6 h-6" />
            </button>
          </header>
          {/* Page Content */}
          <div className="mt-16">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
