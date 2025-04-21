"use client";
export default function Dashboard() {
  return (
    <>
      <main className="p-4  bg-white rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="grid">          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xxl:col-span-8">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 ">
                <div className="p-4">
                  <p className="text-xl font-bold">RM 45,941</p>
                  <p className="text-xs font-semibold text-gray-400">Overdue</p>
                </div>
                <div className="p-4">
                  <p className="text-xl font-bold">RM 37,500</p>
                  <p className="text-xs font-semibold text-gray-400">
                    Total Outstanding
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-xl font-bold">RM 9,200</p>
                  <p className="text-xs font-semibold text-gray-400">
                    In Process
                  </p>
                </div>
                <div className=" p-4">
                  <p className="text-xl font-bold">RM 5,700</p>
                  <p className="text-xs font-semibold text-gray-400">
                    Paid Today
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xxl:col-span-4">
              <div className="p-4">
                <p className="text-sm text-gray-400">Outstanding Revenue</p>
                <div className="shadow w-full bg-gray-100 mt-2">
                  <div className="bg-indigo-600 text-xs leading-none py-1 text-center text-white"></div>
                </div>
                <p className="text-xs font-semibold text-gray-400 mt-2">
                  RM 45,941 Overdue
                </p>
              </div>
            </div>
          </div>          
        </div>
      </main>
    </>
  );
}
