import Image from "next/image";
import NavbarUI from "./__components/layout/NavbarUI";
import { HeaderUi } from "./__components/layout/HeaderUi";

export default function Home() {
  return (
    <>
      <HeaderUi title="Dashboard"></HeaderUi>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Overview</h3>
              <p className="text-gray-600">Some quick stats and insights.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Reports</h3>
              <p className="text-gray-600">View detailed reports and trends.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Settings</h3>
              <p className="text-gray-600">Manage your account preferences.</p>
            </div>
          </div>
    </>
  );
}
