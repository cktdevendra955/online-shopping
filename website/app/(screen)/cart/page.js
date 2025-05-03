import ProductHorizontalUI from "@/app/__componets/product/ProductHorizontalUI";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  return (
    <>
      
        <div className="">
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              <ProductHorizontalUI />
              <ProductHorizontalUI />
              <ProductHorizontalUI />
              <ProductHorizontalUI />
            </div>
            <div className="mt-6 h-full rounded-lg  bg-gray-100 p-6 md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">$129.99</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <Link href={"/checkout"} className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
                Place Order
              </Link>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default CartPage;
