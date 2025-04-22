import React from "react";

const ListOfProductUi = () => {
  return (
    <>
      <tr className="hover:bg-slate-50 border-b border-slate-200">
        <td className="p-4 py-5">
          <p className="block font-semibold text-sm text-slate-800">PROJ1001</p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">John Doe</p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">$1,200.00</p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">2024-08-01</p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">2024-08-15</p>
        </td>
      </tr>
    </>
  );
};

export default ListOfProductUi;
