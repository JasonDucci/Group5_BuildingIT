import React from "react";
import { FaCloud, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";

const Head =
  "text-xs text-left text-gray-800 font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = (art, i, onDeleteHandler, admin) => {
  return (
    <tr key={i}>
      <td className={`${Text}`}>
        <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={art?.image ? art?.image : "/images/user.png"}
            alt={art?.name}
          />
        </div>
      </td>
      <td className={`${Text} truncate`}>{art.name}</td>
      <td className={`${Text}`}>{art.category}</td>
      <td className={`${Text}`}>{art.year}</td>
      <td className={`${Text}`}>{art.medium}</td>
      <td className={`${Text} float-right flex-rows gap-2`}>
        {admin ? (
          <>
            <Link
              to={`/edit/${art?._id}`}
              className="border border-borderbg-dry flex-rows gap-2 text-border rounded py-1 px-2 "
            >
              Edit <FaEdit className="text-rose-600" />
            </Link>
            <button
              onClick={() => onDeleteHandler(art?._id)}
              className="bg-subMain text-white rounded flex-colo w-7 h-6"
            >
              <MdDelete />
            </button>
          </>
        ) : (
          <>
            {/* <button className="border border-borderbg-dry flex-rows gap-2 text-border rounded py-1 px-2 ">
              Dowload <FaCloud className="text-rose-600" />
        </button> */}
            <Link
              to={`/art/${art?._id}`}
              className="bg-subMain text-white rounded flex-colo w-10 h-8"
            >
              <GoEye />
            </Link>
          </>
        )}
      </td>
    </tr>
  );
};

function Table({ data, admin, onDeleteHandler }) {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            <th scope="col" className={`${Head}`}>
              Image
            </th>
            <th scope="col" className={`${Head}`}>
              Name
            </th>
            <th scope="col" className={`${Head}`}>
              Category
            </th>
            <th scope="col" className={`${Head}`}>
              Year
            </th>
            <th scope="col" className={`${Head}`}>
              Medium
            </th>
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((art, i) => Rows(art, i, onDeleteHandler, admin))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
