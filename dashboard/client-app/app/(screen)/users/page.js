import PageHeaderUI from "@/app/__components/pageHeader/PageHeaderUI";
import UserTableRowUI from "@/app/__components/users/UserTableRowUI";
import React from "react";

const Users = () => {
  const pageHeader = {
    title: "Users ",
    subtitle: "Manage your users, their roles, and permissions",
    link: "#",
    searhFor: "store",
  };

  return (
    <>
      <PageHeaderUI
        title={pageHeader.title}
        subtitle={pageHeader.subtitle}
        link={pageHeader.link}
      />

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
              <th scope="col" className="px-6 py-4 font-medium text-white"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <UserTableRowUI />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
