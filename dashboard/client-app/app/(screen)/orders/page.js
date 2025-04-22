import OrderRowUI from "@/app/__components/orders/OrderRowUI";
import Link from "next/link";
import React from "react";

const Orders = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="p-6 bg-gradient-to-br from-white via-slate-50 to-gray-100 rounded-2xl border border-gray-200 shadow-xl dark:bg-gray-900 dark:border-gray-700 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Header Text */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                📦Orders
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                View and manage your orders efficiently. Track status, details,
                and process shipments.
              </p>
            </div>

            {/* Search */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
              <div className="relative flex items-center w-full md:w-72">
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="w-full py-2.5 px-4 pl-10 text-sm rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  height="20"
                  width="20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817
              4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2">
        <div className="bg-white rounded-lg border shadow-md p-4 dark:bg-gray-800 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <tbody className="text-sm divide-y divide-gray-100">
                <OrderRowUI />
                <OrderRowUI />
                <OrderRowUI />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
