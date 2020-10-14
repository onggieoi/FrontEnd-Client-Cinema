import React from 'react';

import { TableItem } from 'interfaces';
import { CheckSquare, Trash2 } from 'react-feather';

interface Props {
  Data: TableItem[];
}

const Table: React.FC = () => {
  const ActiveClass = (isCancelled: number) => {
    if (isCancelled !== 1) {
      return 'text-theme-9';
    }
    return 'text-theme-6';
  };

  return (
    <table className="table table-report">
      <thead>
        <tr>
          <th className="whitespace-no-wrap">IMAGES</th>
          <th className="whitespace-no-wrap">PRODUCT NAME</th>
          <th className="text-center whitespace-no-wrap">STOCK</th>
          <th className="text-center whitespace-no-wrap">STATUS</th>
          <th className="text-center whitespace-no-wrap">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr className="intro-x">
          <td className="w-40">
            <div className="flex">
              <div className="w-10 h-10 image-fit zoom-in">
                <img className="tooltip rounded-full" src="/preview-4.jpg" />
              </div>
              <div className="w-10 h-10 image-fit zoom-in -ml-5">
                <img className="tooltip rounded-full" src="/preview-4.jpg" />
              </div>
              <div className="w-10 h-10 image-fit zoom-in -ml-5">
                <img className="tooltip rounded-full" src="/preview-4.jpg" />
              </div>
            </div>
          </td>
          <td>
            <a href="" className="font-medium whitespace-no-wrap">Sony A7 III</a>
            <div className="text-gray-600 text-xs whitespace-no-wrap">Photography</div>
          </td>
          <td className="text-center">50</td>
          <td className="w-40">
            <div className="flex items-center justify-center text-theme-6">
              <CheckSquare />Inactive </div>
          </td>
          <td className="table-report__action w-56">
            <div className="flex justify-center items-center">
              <button className="flex items-center mr-3">
                <CheckSquare />Edit
              </button>
              <button className="flex items-center text-theme-6">
                <Trash2 />Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
