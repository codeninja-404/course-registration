import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const Card = () => {
    return (
        <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
        <div className="card-body">
          <img
            src="https://i.ibb.co/CmWSqkB/Rectangle-2-3.png"
            alt="Introduction to Algorithms"
            className="pb-2"
          />
          <h2 className="card-title">Introduction to Algorithms</h2>
          <p className="text-gray-500">
            C programming is a versatile, low-level programming language. It's
            known for system software, embedded systems, and high-performance
            applications. C offers control and efficiency through manual memory
            management.
          </p>
          <div className="flex justify-around gap-16 text-2xl ">
            <p>
              <FaDollarSign className="inline-block"></FaDollarSign>
              <small className="text-xl text-gray-500"> Price : 35000</small>
            </p>
            <p>
              <FaBookOpen className="inline-block"></FaBookOpen>
              <small className="text-xl text-gray-500"> Credit : 1hr</small>
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn text-white hover:text-black bg-blue-400 w-full">Select</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Card;