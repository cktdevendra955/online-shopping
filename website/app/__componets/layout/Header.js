import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      {/* <div className="flex flex-wrap shadow">
        <div className="  mx-auto w-11/12 bg-white rounded-xl">
          <div className="sm:flex items-stretch justify-between grow lg:mb-0  py-5 px-5">
            <div className="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
              <span className="my-0 flex text-dark font-semibold text-[1.35rem]/[1.2] flex-col justify-center">
                Profile
              </span>
              <span className="pt-1 text-secondary-dark text-[0.95rem] font-medium">
                See all your notifications
              </span>
            </div>
            <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
              <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
                <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                  </svg>
                </span>
                <input
                  className="block w-full min-w-[70px] py-3 pl-12 pr-4 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-stone-200 bg-clip-padding rounded-2xl"
                  placeholder="Search..."
                  type="text"
                />
                <span
                  onclick="(() => { this.previousElementSibling.value=''})()"
                  className="absolute right-0 left-auto mr-4 leading-none -translate-y-1/2 peer-placeholder-shown:hidden top-1/2 hover:text-primary text-muted"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="relative lg:hidden flex items-center sm:ml-2 ml-auto">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary"
                  onclick="(function(){document.querySelector('.group\\/sidebar').classList.toggle('-translate-x-full');})();"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="relative flex items-center ml-2 lg:ml-4">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="relative flex items-center ml-2 lg:ml-4">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="relative flex items-center ml-2 lg:ml-4">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center w-12 h-12 text-base font-semibold leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark "
                >
                  <span className="text-[1.15rem]">6</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <header className="flex  py-4 px-4 sm:px-10 bg-white font-sans  tracking-wide relative z-50 shadow">
        <div className="flex flex-wrap items-center gap-4 w-full">
          <Link href={"/"}>
            <h3 className="text-2xl font-semibold">Logo</h3>
          </Link>

          <div className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
            <button className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              {/* <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
                <li className="mb-6 hidden max-lg:block">
                  <a href="javascript:void(0)">
                    <img
                      src="https://readymadeui.com/readymadeui.svg"
                      alt="logo"
                      className="w-36"
                    />
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]"
                  >
                    Home
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                  >
                    Shop
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                  >
                    Sale
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                  >
                    Manage
                  </a>
                </li>
              </ul> */}

              <ul className="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ">
                <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                  <Link 
                    href={"/category/Men"}
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                  >
                    Men
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                  <Link
                     href={"/category/Woman"}
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                  >
                    Woman
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-l border-[#333] h-6 max-lg:hidden"></div>

          <div className="flex items-center ml-auto space-x-6">
            <Link
              href={"/cart"}
              className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
            >
              Cart
            </Link>
            <Link
              href={"/order"}
              className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
            >
             My Orders
            </Link>
            <button className="px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]">
                Registor
            </button>

            <button className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
