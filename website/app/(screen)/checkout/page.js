import CheckOutProductUI from "@/app/__componets/cheackout/CheckOutProductUI";
import React from "react";

const CheckOut = () => {
  return (
    <>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg bg-white px-2 py-4 sm:px-6 shadow">
            <CheckOutProductUI />
            <CheckOutProductUI />
            <CheckOutProductUI />
            <CheckOutProductUI />
          </div>
        </div>
        <div className="">
          <div className="mb-5"> 
            <p className="mt-8 text-lg font-medium">Shipping Methods</p>
            <form className="mt-5 grid gap-6">
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  for="radio_1"
                >
                  <img
                    className="w-14 object-contain"
                    src="/images/naorrAeygcJzX0SyNI4Y0.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Fedex Delivery</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  for="radio_2"
                >
                  <img
                    className="w-14 object-contain"
                    src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Fedex Delivery</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
            </form>
          </div>

          <div className=" rounded-2xl bg-gray-50 px-4 pt-8 lg:mt-0 mt-10">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <div className="">
               
              <label
                for="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>
              

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">$399.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">$8.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">$408.00</p>
              </div>
            </div>
            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
