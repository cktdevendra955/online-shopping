import Link from 'next/link'
import React from 'react'

const ListOfCategoryUI = () => {
  return (
    <>
    <a href="#" className="">
            {/* <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
              {" "}
              FEATURED{" "}
            </p> */}

            <div className="grid grid-cols-6 p-5 gap-y-2">
              <div>
                <img
                  src="https://picsum.photos/seed/2/200/200"
                  className="max-w-16 max-h-16 rounded-full"
                />
              </div>

              <div className="col-span-5  ml-4">
                <p className="text-sky-500 font-bold text-xs">
                  {" "}
                  20+ SPOTS LEFT{" "}
                </p>

                <Link href={"category/slug"} className="text-gray-600 font-bold">
                  {" "}

                  [Intermediate/Advanced] Tea Time Conversation{" "}
                </Link>

                <p className="text-gray-400 text-sm"> Beginner speakers </p>
              </div>
            </div>
          </a>
    </>
  )
}

export default ListOfCategoryUI