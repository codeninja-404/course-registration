const Selected = ({ selected, totalCredit, remaining, toast }) => {
  return (
    <div>
      <div>
        {toast === 0 ? (
          <h1 className="text-xl  font-bold text-blue-500 border-b-2 border-gray-400 pb-3">
            Credit Hours Remaining :{remaining}
          </h1>
        ) : (
          <div>
            <h1 className="text-xl font-bold text-blue-500 border-b-2 border-gray-400 pb-3">
              Credit Hours Remaining :{remaining}
            </h1>
            <div className="toast text-xl font-semibold toast-top toast-center">
              <div className="alert text-white bg-red-500 alert-success">
                <span>Not Enough Credit Hours.</span>
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
        {toast === 0 ? (
          <p className="py-3 text-xl font-semibold">Total Credit Hour : {totalCredit}</p>
        ) : (
          <div>
            <p className="py-3 text-xl font-semibold">Total Credit Hour : {totalCredit}</p>
            <div className="toast text-xl font-semibold  toast-top  toast-center mt-20">
              <div className="alert alert-success bg-yellow-500 text-white">
                <span>Maximum Credit limit is 20</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Selected;
