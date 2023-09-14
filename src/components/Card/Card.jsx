import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const Card = ({ card, handleSelect }) => {
  const { id, title, image, credit, price, details } = card;
  return (
    <div className="">
      <div className="card card-compact h-full bg-base-100 shadow-xl">
        <div className="card-body">
          <img src={image} alt="Introduction to Algorithms" className="pb-2" />
          <h2 className="card-title">{title}</h2>
          <p className="text-gray-500">{details}</p>
          <div className="flex justify-evenly text-2xl ">
            <p className="text-center">
              <FaDollarSign className="inline-block"></FaDollarSign>
              <small className="text-base text-gray-500">
                {" "}
                Price : {price}
              </small>
            </p>
            <p className="text-center">
              <FaBookOpen className="inline-block"></FaBookOpen>
              <small className="text-base text-gray-500">
                {" "}
                Credit : {credit} hr
              </small>
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleSelect(card)}
              className="btn text-white hover:text-black bg-blue-400 w-full"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
