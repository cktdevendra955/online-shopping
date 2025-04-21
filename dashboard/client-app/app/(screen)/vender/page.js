import PageHeaderUI from "@/app/__components/pageHeader/PageHeaderUI";
import VenderTableRowUI from "@/app/__components/vender/VenderTableRowUI";
import Link from "next/link";
import React from "react";

const Vender = () => {
  const pageHeader = {
    title:"Vendors",
    subtitle:"Manage your vendor relationships and list of supplier",
    link:"vender/create",
    search:"vender"
  }
  return (
    <>    
      <PageHeaderUI title={pageHeader.title} subtitle={pageHeader.subtitle} link={pageHeader.link} />

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-black">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Status
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Mobile
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-white">
                Store
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-white"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <VenderTableRowUI />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Vender;
