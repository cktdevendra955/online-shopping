import React from "react";
import UploadSingleImage from "../upload/SingleImageUpload";
import Link from "next/link";

const CreateNewProductUI = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">        
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Title
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"              
              type="text"
              placeholder="Title"
            />
            <p className="text-grey-dark text-xs italic">
              
            </p>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="Description"
              placeholder="Title"
            ></textarea>
            <p className="text-grey-dark text-xs italic">
              
            </p>
          </div>
        </div>


        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Brand
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              
            </div>
          </div>
        </div>


        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Buy Price
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Sell Price
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Discounnt
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Stock
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 text-end">
            <Link href={"/product/create/uploade-image"} className="bg-black px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
              Save And Next
             </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewProductUI;
