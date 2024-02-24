/* eslint-disable react/prop-types */
import { useState } from "react";

const Feedback = ({ feedback }) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!fName && !lName && !address && !email && !phone) {
      alert("fill the form first");
    } else {
      setFName("");
      setLName("");
      setAddress("");
      setEmail("");
      setPhone("");

      alert("Thanks for the feedback!");
      feedback(false);
    }
  };
  return (
    <div className="w-full flex justify-center ">
      <form
        onSubmit={handleFormSubmit}
        className="w-[70%] mt-5 bg-gray-400 h-[90vh] rounded-lg p-5"
      >
        <div className="block">
          <label htmlFor="first name" className="text-[22px]">
            First Name :
          </label>
          <input
            type="text"
            name="first name"
            id=""
            value={fName}
            placeholder="Jay"
            className="block w-full my-2 rounded-lg h-[30px] px-2 py-1 outline-none"
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className="block">
          <label htmlFor="last name" className="text-[22px]">
            Last Name:
          </label>
          <input
            type="text"
            name="last name"
            id=""
            value={lName}
            placeholder="Mishra"
            className="block outline-none w-full my-2 rounded-lg h-[30px] px-2 py-1"
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        <div className="block">
          <label htmlFor="address" className="text-[22px]">
            Address:
          </label>
          <input
            type="row"
            name="address"
            id=""
            value={address}
            placeholder="Gurgaon"
            className="block outline-none w-full my-2 rounded-lg h-[30px] px-2 py-1"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="block">
          <label htmlFor="email" className="text-[22px]">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id=""
            value={email}
            placeholder="jay@gmail.com"
            className="block outline-none w-full my-2 rounded-lg h-[30px] px-2 py-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="block">
          <label htmlFor="Phone Number" className="text-[22px]">
            Phone Number:
          </label>
          <input
            type="text"
            name="Phone Number"
            id=""
            value={phone}
            placeholder="9876543210"
            className="block outline-none w-full my-2 rounded-lg h-[30px] px-2 py-1"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full justify-center px-5 py-2 bg-green-500 text-[20px] rounded-lg cursor-pointer text-white"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
