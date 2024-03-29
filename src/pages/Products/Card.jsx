import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { AiFillHeart, AiOutlineClockCircle } from "react-icons/ai";

const Card = ({ item }) => {
  const { img, title, price, likes, sale } = item;
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState(price);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const toogleModal = () => {
    setIsModelOpen(!isModalOpen);
  };

  const handleSubmit = () => {
    console.log("Full name: ", fullName);
    console.log("Your email: ", email);
    console.log("Bid amount: ", bidAmount);
    const data = {
      full_name: fullName,
      email: email,
      amount: bidAmount,
    };
    console.log(data);
    toogleModal();
  };

  return (
    <>
      <div className="flex group flex-col space-y-10 rounded-lg overflow-hidden border border-slate-400/10 pb-8 hover:shadow-xl duration-500 ease-in-out hover:shadow-white/5 relative">
        {/* images and counter */}
        <div>
          <img src={img} alt="" className="object-cover" />
          {sale && (
            <div className="flex space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-red-400 via-fuchsia-500 to-indigo-500 rounded-xl absolute bottom-5 left-5">
              <AiOutlineClockCircle />
              <p> 66 : 08 : 19 : 27</p>
            </div>
          )}
        </div>

        {/* content */}
        <div className="px-6 flex flex-col space-y-3">
          <h3>{title}</h3>
          <div>
            {/* price */}
            <div className="flex justify-between">
              <div className="flex space-x-2 text-indigo-600 items-center">
                <FaEthereum size={18} />
                <p className="text-sm font-semibold ">{price} ETH</p>
              </div>
              <div className="flex space-x-2 text-indigo-600 items-center">
                <AiFillHeart size={18} className="text-red-500" />
                <p className="text-sm text-slate-400 font-semibold ">
                  {likes} ETH
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute hidden top-1/4 left-1/3 md:right-1/4 md:left-1/4 group:hover:flex animate-bounce transition-all ease-in-out duration-1000">
          <button
            onClick={toggleModal}
            className="text-sm px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 duration-200 ease-in-out"
          >
            Place bit
          </button>
        </div>
      </div>
      {/* Modal */}
      <BidModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onBidSubmit={handleSubmit}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        bidAmount={bidAmount}
        setBidAmount={setBidAmount}
      />
    </>
  );
};

export default Card;
