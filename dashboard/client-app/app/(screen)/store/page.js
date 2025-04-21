import PageHeaderUI from "@/app/__components/pageHeader/PageHeaderUI";
import Link from "next/link";
import React from "react";

const Store = () => {
  const pageHeader = {
    title: "Store ",
    subtitle: "Store experience and manage all your product categories",
    link: "store/create",
    searhFor: "store",
  };

  return (
    <>
      <PageHeaderUI
        title={pageHeader.title}
        subtitle={pageHeader.subtitle}
        link={pageHeader.link}
      />

      <div className=" from-blue-50 to-violet-50 flex items-center justify-center mt-2 ">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 ">
              <img
                className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              />
              <h1 className="text-lg text-gray-700"> John Doe </h1>
              <h3 className="text-sm text-gray-400 "> Creative Director </h3>
              <Link href={"store/slug"} className="bg-black  hover:bg-indigo-700 px-8 py-1 mt-6 rounded-3xl text-gray-100 ">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
