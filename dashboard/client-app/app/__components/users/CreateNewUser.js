import React from "react";

export const CreateNewUser = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-8/12 mx-auto">        
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              First Name
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter rounded py-3 px-4 mb-3 focus:border-gray-800 focus:outline-none"
                type="text"
                placeholder="Title"
              />
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Last Name
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter rounded py-3 px-4 mb-3 focus:border-gray-800 focus:outline-none"
                type="text"
                placeholder="Title"
              />
            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Mobile No.
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter rounded py-3 px-4 mb-3 focus:border-gray-800 focus:outline-none"
              type="text"
              placeholder="Title"
            />
            <p className="text-grey-dark text-xs italic"></p>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
             Email 
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter rounded py-3 px-4 mb-3 focus:border-gray-800 focus:outline-none"
              type="text"
              placeholder="Title"
            />
            <p className="text-grey-dark text-xs italic"></p>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter rounded py-3 px-4 mb-3 focus:border-gray-800 focus:outline-none"
              type="text"
              placeholder="Title"
            />
            <p className="text-grey-dark text-xs italic"></p>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 text-end"></div>
        </div>
      </div>
    </>
  );
};
