import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const enteredEmail = event.target[1].value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(enteredEmail);
    setIsValidEmail(isValid);
    if (isValid) {
      navigate("/success");
    }
  };

  return (
    <div className="h-screen w-full relative">
      <Navbar iconEnabled={"false"} />
      <div className="registerForm px-10 pt-20 absolute h-3/4 w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <div className="textMain relative left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center leading-none gap-2 w-[34vw]">
          <h1 className="text-2xl font-briem text-green-600 font-medium">
            registration form
          </h1>
          <h2 className="text-5xl text-center font-semibold font-Manrope leading-[3.5rem]">
            Every success journey we&apos;ve encountered.
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col px-14 gap-2">
          <label htmlFor="name" />
          <input
            className="h-[4.2rem] focus:outline-none focus:border focus:border-blue-500 text-lg w-full rounded-full bg-[#EFEFEF] px-5 text-black"
            type="text"
            placeholder="Enter your name"
          />
          <label htmlFor="email" />
          <input
            className="h-[4.2rem] focus:outline-none focus:border focus:border-blue-500 text-lg w-full rounded-full bg-[#EFEFEF] px-5 text-black"
            type="text"
            placeholder="Enter your email"
          />
          {!isValidEmail &&
            <span className="warningText flex items-center gap-2 text-red-600 font-medium p-2">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50162 13.6666C3.81973 13.6666 0.834961 10.6818 0.834961 6.99992C0.834961 3.31802 3.81973 0.333252 7.50162 0.333252C11.1835 0.333252 14.1683 3.31802 14.1683 6.99992C14.1683 10.6818 11.1835 13.6666 7.50162 13.6666ZM6.83496 8.99992V10.3332H8.16829V8.99992H6.83496ZM6.83496 3.66658V7.66658H8.16829V3.66658H6.83496Z"
                  fill="#FF0808"
                />
              </svg>
              Enter a valid email address
            </span>}
          <button
            type="submit"
            className="w-full bg-black h-[4.2rem] text-white capitalize font-medium my-10 rounded-full"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
