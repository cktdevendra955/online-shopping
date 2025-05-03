import Link from 'next/link'
import React from 'react'

const OrderUI = () => {
  return (
    <>

<div className="md:flex items-strech border-t border-gray-50 border shadow-sm p-5 rounded mb-5 bg-white w-full">
        <div className="md:w-4/12 2xl:w-1/4 w-full">
          <img
            src="https://i.ibb.co/SX762kX/Rectangle-36-1.png"
            alt="Black Leather Bag"
            className="h-full object-center object-cover md:block hidden"
          />
          <img
            src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg"
            alt="Black Leather Bag"
            className="md:hidden w-full h-full object-center object-cover"
          />
        </div>
        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">          
          <div className="flex items-center justify-between w-full pt-1">
            <Link href={"/product/sadjiosjad"}>
            <p className="text-base font-black leading-none text-gray-800 dark:text-white">
              North wolf bag
            </p>
            </Link>
           
          </div>
          <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
            Height: 10 inches
          </p>
          <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
            Color: Black
          </p>
          <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
            Composition: 100% calf leather
          </p>
          <div className="flex items-center justify-between pt-5">
            <div className="flex itemms-center">
              <Link href={"/order/track/dsajsadj"}>
                <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                  Track Order
                </p>
              </Link>
            </div>
            <p className="text-base font-black leading-none text-gray-800 dark:text-white">
              123,000
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderUI