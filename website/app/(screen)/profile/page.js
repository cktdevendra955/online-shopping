import React from "react";

const UserProfile = () => {
  return (
    <>
      <div class="">
        <div class="container mx-auto  p-5 ">
          <div class="md:flex no-wrap md:-mx-2 ">
            <div class="w-full md:w-3/12 md:mx-2">
              <div class="mx-auto right-0 mt-2 w-60">
                <div class="bg-white rounded overflow-hidden shadow-lg">
                  <div class="text-center p-6 bg-gray-800 border-b">
                    <svg
                      aria-hidden="true"
                      role="img"
                      class="h-24 w-24 text-white rounded-full mx-auto"
                      width="32"
                      height="32"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
                      ></path>
                    </svg>
                    <p class="pt-2 text-lg font-semibold text-gray-50">
                      John Doe
                    </p>
                    <p class="text-sm text-gray-100">John@Doe.com</p>
                    <div class="mt-5">
                      <a class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                        Manage your Account
                      </a>
                    </div>
                  </div>
                  <div class="border-b">
                    <span href="/account/campaigns">
                      <a class="px-4 py-2 hover:bg-gray-100 flex">
                        <div class="text-green-600">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            viewBox="0 0 24 24"
                            class="w-5 h-5"
                          >
                            <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <div class="pl-3">
                          <p class="text-sm font-medium text-gray-800 leading-none">
                            Campaigns
                          </p>
                          <p class="text-xs text-gray-500">
                            View your campaigns
                          </p>
                        </div>
                      </a>
                    </span>
                    <span href="/account/donations">
                      <a class="px-4 py-2 hover:bg-gray-100 flex">
                        <div class="text-gray-800">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            viewBox="0 0 24 24"
                            class="w-5 h-5"
                          >
                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div class="pl-3">
                          <p class="text-sm font-medium text-gray-800 leading-none">
                            Donations
                          </p>
                          <p class="text-xs text-gray-500">
                            View your last donations
                          </p>
                        </div>
                      </a>
                    </span>
                  </div>

                  <div class="">
                    <button
                      href="#"
                      class="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex"
                    >
                      <p class="text-sm font-medium text-gray-800 leading-none">
                        {" "}
                        Logout
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full mx-2 ">
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">About</span>
                </div>
                <div class="text-gray-700">
                  <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">First Name</div>
                      <div class="px-4 py-2">Jane</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Last Name</div>
                      <div class="px-4 py-2">Doe</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      <div class="px-4 py-2">Female</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      <div class="px-4 py-2">+11 998001001</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Current Address</div>
                      <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">
                        Permanant Address
                      </div>
                      <div class="px-4 py-2">
                        Arlington Heights, IL, Illinois
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email.</div>
                      <div class="px-4 py-2">
                        <a class="text-blue-800" href="mailto:jane@example.com">
                          jane@example.com
                        </a>
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Birthday</div>
                      <div class="px-4 py-2">Feb 06, 1998</div>
                    </div>
                  </div>
                </div>
                <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                  Show Full Information
                </button>
              </div>

              <div class="my-4"></div>

              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="grid grid-cols-2">
                  <div>
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span class="tracking-wide">Experience</span>
                    </div>
                    <ul class="list-inside space-y-2">
                      <li>
                        <div class="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div class="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div class="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div class="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div class="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div class="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div class="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div class="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            fill="#fff"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </span>
                      <span class="tracking-wide">Education</span>
                    </div>
                    <ul class="list-inside space-y-2">
                      <li>
                        <div class="text-teal-600">
                          Masters Degree in Oxford
                        </div>
                        <div class="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div class="text-teal-600">
                          Bachelors Degreen in LPU
                        </div>
                        <div class="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
