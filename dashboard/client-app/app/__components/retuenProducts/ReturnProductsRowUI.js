import Link from "next/link";
import React from "react";

const ReturnProductsRowUI = () => {
  return (
    <>
      <tr className="">
        <td className=" whitespace-nowrap ">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-2 sm:mr-3">
              <img
                className="rounded-full border"
                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                width="40"
                height="40"
                alt=""
              />
            </div>
            <div className="font-medium text-gray-800"><Link href={"#"}>Alex Shatov</Link></div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">alexshatov@gmail.com</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-green-500">$2,890.66</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center">🇺🇸</div>
        </td>
      </tr>
    </>
  );
};

export default ReturnProductsRowUI;
