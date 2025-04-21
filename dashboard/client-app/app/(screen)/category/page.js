
import ListOfCategoryUI from "@/app/__components/category/ListOfCategoryUI";
import PageHeaderUI from "@/app/__components/pageHeader/PageHeaderUI";
import Link from "next/link";
import React from "react";

const Category = () => {
  const pageHeader = {
    title: "Category",
    subtitle: "Browse and manage all your product categories",
    link: "category/create",
    searhF: "category",
  };

  return (
    <>
      <PageHeaderUI
        title={pageHeader.title}
        subtitle={pageHeader.subtitle}
        link={pageHeader.link}
      />
      <div className="grid grid-cols-12 gap-2">
        <div className="mt-2 bg-white rounded-lg border shadow-md sm:p-2 dark:bg-gray-800 dark:border-gray-700 sm:col-span-6">
          <ListOfCategoryUI />
        </div>
      </div>
    </>
  );
};

export default Category;
