import React, { useState } from "react";

const Selected = ({ selected, totalCredit, remaining }) => {
  return (
    <div>
      <div>
        {remaining >= 0 ? (
          <h1 className="text-lg font-bold text-blue-500 border-b-2 border-gray-400 pb-3">Credit Hours Remaining :{remaining} </h1>
        ) : (
          <div>
            <p className="text-lg font-bold text-blue-500 border-b-2 border-gray-400 pb-3">No Credit Remaining.</p>
            <div className="toast toast-top toast-end">
              <div className="alert bg-green-500">
                <span className="text-xl text-white font-bold">
                  Not enough Credit !!
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border-b-2 border-gray-400 py-3">
        <h1 className="text-lg font-bold mb-6">Course Name</h1>
        {selected.map((item, idx) => (
          <p className="py-2" key={idx}>
            {idx + 1} . {item.title}
          </p>
        ))}
      </div>
      <div>
        {totalCredit <= 20 ? (
          <p className="py-3">Total Credit Hour : {totalCredit}</p>
        ) : (
          <div>
            <p className="py-3 text-lg font-semibold">Credit is Limited to 20</p>
            <div className="toast toast-end toast-middle">
              <div className="alert bg-red-500">
                <span className="text-xl text-white font-bold">
                  Credit Limit is Full !!
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Selected;
