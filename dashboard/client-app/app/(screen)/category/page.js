import UserUI from "@/app/__components/user/UserUI";
import React from "react";

const Category = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="p-4  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          {/* <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Customers
          </h3>
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
          </a>
        </div> */}

          <div className=" flex items-center justify-between">
            <div>
              <h2 className="text-gray-900 font-semibold">Categories</h2>
              <span className="text-xs">All products item</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex bg-gray-50 items-center p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="bg-gray-50 outline-none ml-1 block "
                  type="text"
                  name=""
                  id=""
                  placeholder="search..."
                />
              </div>
              <div className="lg:ml-40 ml-10 space-x-8">
                <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                  Create
                </button>
              </div>
            </div>
          </div>

          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <UserUI />
              <UserUI />
              <UserUI />
              <UserUI />
              <UserUI />
              <UserUI />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
