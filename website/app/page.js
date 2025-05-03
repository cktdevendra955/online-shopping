import Image from "next/image";
import ProductUI from "./__componets/product/ProductUI";
import HighlightsUI from "./__componets/HighlightsUI";
import FeaturedUI from "./__componets/FeaturedUI";
import Carousel from "./__componets/Carousel";
import Banner from "./__componets/Banner";

export default function Home() {
  return (
    <>

    <Carousel />
      <div className="">
        <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                Best Deal
              </h1>
              <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
                Save upto <span className="font-bold">50%</span>
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
              <img
                src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"
                alt=""
                className=""
              />
            </div>
          </div>
          <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                Game Console
              </h1>
              <p className="text-base lg:text-xl text-gray-800 dark:text-white">
                Save Upto <span className="font-bold">30%</span>
              </p>
            </div>
            <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
              <img
                src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
                alt=""
                className="md:w-20 md:h-20 lg:w-full lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductUI />
          <ProductUI />
          <ProductUI />
          <ProductUI />
        </div>
      </div>

      <Banner />

      {/* ***********TOP SELLING ********************* */}

      <div className="grid lg:grid-cols-2 gap-3 container mx-auto py-9 md:py-12 px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          <figure className="relative w-full h-60">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </figure>
          <figure className="relative w-full h-60">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </figure>
        </div>
        <figure className="relative w-full h-72 sm:h-96 lg:h-full">
          <img
            className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
            alt="Image Description"
          />
        </figure>
      </div>

      {/* *****************STORIES***************** */}
      <div className="">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50">
              Top Selling
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
            <div className="bg-gray-50 dark:bg-gray-800 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600 dark:text-white">
                  Lounge Chair
                </h2>
                <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img
                  className=""
                  src="https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png"
                  alt="A chair with designed back"
                  role="img"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                <button
                  aria-label="show in red color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#DC2626"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in white color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="white"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in black color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#111827"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600 dark:text-white">
                  Lounge Chair
                </h2>
                <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img
                  className=""
                  src="https://i.ibb.co/WBdnRqb/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2-1.png"
                  alt="A chair with wooden legs"
                  role="img"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-8 md:mt-24">
                <button
                  aria-label="show in white color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="white"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in black color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#111827"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600 dark:text-white">
                  Lounge Chair
                </h2>
                <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img
                  className=""
                  src="https://i.ibb.co/R2fbCvj/kari-shea-It-Mgg-D0-Egu-Y-unsplash-removebg-preview-2-1.png"
                  alt="A sofa chair with wooden legs"
                  role="img"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                <button
                  aria-label="show in green color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#047857"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in brown color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#92400E"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8">
              <div>
                <h2 className="text-xl leading-tight text-gray-600 dark:text-white">
                  Sectional Sofa
                </h2>
                <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
              </div>
              <div className="flex justify-center items-center mt-28 md:mt-3">
                <img
                  src="https://i.ibb.co/CPdBFwZ/pexels-pixabay-276583-removebg-preview-1-1.png"
                  alt="A large sectional sofa"
                  role="img"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                <button
                  aria-label="show in yellow color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#F59E0B"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in light gray color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#9CA3AF"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8">
              <div>
                <h2 className="text-xl leading-tight text-gray-600 dark:text-white">
                  Two Seater Sofa
                </h2>
                <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
              </div>
              <div className="flex justify-center items-center mt-28 md:mt-1">
                <img
                  src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png"
                  alt="A beautiful two seater sofa"
                  role="img"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                <button
                  aria-label="show in black color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#111827"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in green color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#047857"
                      stroke="#6B7280"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturedUI />

      <HighlightsUI />
    </>
  );
}
