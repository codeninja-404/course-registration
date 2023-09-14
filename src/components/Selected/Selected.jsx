import React, { useState } from "react";

const Selected = ({ selected, totalCredit, remaining }) => {
  return (
    <div>
      <div>
        {remaining >= 0 ? (
          <h1>Credit hours remaining :{remaining} </h1>
        ) : (
          <div>
            <p>No Credit Remaining.</p>
            <div className="toast toast-top toast-end">
              <div className="alert bg-green-500">
                <span className="text-xl text-white font-bold">
                  Sorry Credit Limit is Full !!
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h1>Course Name</h1>
        {selected.map((item, idx) => (
          <p key={idx}>
            {idx + 1} . {item.title}
          </p>
        ))}
      </div>
      <div>
        {totalCredit <= 20 ? (
          <p>Total Credit Hour : {totalCredit}</p>
        ) : (
          <div>
            <p>Credit is Limited to 20</p>
            <div className="toast toast-end toast-middle">
              <div className="alert bg-red-500">
                <span className="text-xl text-white font-bold">
                  Sorry Credit Limit is Full !!
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
