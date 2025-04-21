import CreateNewCategoryUI from "@/app/__components/category/create/CreateNewCategoryUI";
import React from "react";

const CreateCategory = () => {
  return (
    <>
      <div className=" flex items-center justify-center">
        <div className=" text-gray-500 w-full overflow-hidden">
          <div className="md:flex w-full">
            <CreateNewCategoryUI />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
