import React, { useState } from "react";

const Selected = ({ selected, totalCredit, remaining }) => {
  return (
    <div>
      <div>
      <h1 className="text-lg font-bold text-blue-500 border-b-2 border-gray-400 pb-3">Credit Hours Remaining :{remaining} </h1>
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
      <p className="py-3">Total Credit Hour : {totalCredit}</p>
      </div>
    </div>
  );
};

export default Selected;
