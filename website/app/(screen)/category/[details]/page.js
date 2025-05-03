import ProductUI from "@/app/__componets/product/ProductUI";
import React from "react";

const Products = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
              <span
                href="#"
                className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
              >
                Jackets & Coats
              </span>
              <span
                href="#"
                className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
              >
                Hoodies
              </span>
              <span
                href="#"
                className="block font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                T-shirts & Vests
              </span>
              <span
                href="#"
                className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
              >
                Shirts
              </span>
              <span
                href="#"
                className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
              >
                Blazers & Suits
              </span>
              <span
                href="#"
                className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
              >
                Jeans
              </span>
              <span
                href="#"
                className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
              >
                Trousers
              </span>
              <span
                href="#"
                className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
              >
                Shorts
              </span>
              <span
                href="#"
                className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
              >
                Underwear
              </span>
            </div>

            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                <p className="text-gray-500 dark:text-gray-300">6 Items</p>
                <div className="flex items-center">
                  <p className="text-gray-500 dark:text-gray-300">Sort</p>
                  <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                    <option value="#">Recommended</option>
                    <option value="#">Size</option>
                    <option value="#">Price</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ProductUI />              
                <ProductUI />
                <ProductUI />
                <ProductUI />
                <ProductUI />
                <ProductUI />
                <ProductUI />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
