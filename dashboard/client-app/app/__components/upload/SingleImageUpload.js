import React from "react";

const SingleImageUpload = () => {
  return (
    <>
      <div class="mt-8 space-y-3">
        <div class="grid grid-cols-1 space-y-2">
          <label class="text-sm font-bold text-gray-500 tracking-wide">
            Attach Document
          </label>
          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
              <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                  <img
                    class="has-mask h-36 object-center"
                    src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                    alt="freepik image"
                  />
                </div>
                <p class="pointer-none text-gray-500 ">
                  <span class="text-sm">Drag and drop</span> files here <br />{" "}
                  or{" "}
                  <a href="" id="" class="text-blue-600 hover:underline">
                    select a file
                  </a>{" "}
                  from your computer
                </p>
              </div>
              <input type="file" class="hidden" />
            </label>
          </div>
        </div>
        <p class="text-sm text-gray-300">
          <span>File type: doc,pdf,types of images</span>
        </p>
        <div>          
        </div>
      </div>
    </>
  );
};

export default SingleImageUpload;
