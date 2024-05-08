import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  // Function to start the countdown
  const startCountdown = () => {
    const countdownInterval = setInterval(() => {
      setCountdown(prevCount => prevCount - 0.5); // Decrement countdown
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      navigate("/");
    }, countdown * 1000); // Redirect after 'countdown' seconds

    return () => clearInterval(countdownInterval);
  };
  useEffect(() => {
    startCountdown();
  }, []);

  return (
    <div className="h-screen w-full relative">
      <Navbar iconEnabled={"disabled"} />
      <div className="maincotent h-1/2 w-1/3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="icon h-20 w-20 flex items-center justify-center relative left-1/2 rounded-full top-0 -translate-x-1/2 -translate-y-1/2">
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40.5" cy="40.5" r="28" fill="white" />
            <path
              d="M40.0014 73.3219C21.5919 73.3219 6.66809 58.3979 6.66809 39.9886C6.66809 21.5791 21.5919 6.65527 40.0014 6.65527C58.4107 6.65527 73.3347 21.5791 73.3347 39.9886C73.3347 58.3979 58.4107 73.3219 40.0014 73.3219ZM36.6768 53.3219L60.2471 29.7517L55.5331 25.0377L36.6768 43.8939L27.2488 34.4656L22.5347 39.1799L36.6768 53.3219Z"
              fill="#28B246"
            />
          </svg>
        </div>
        <div className="textMain relative left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center leading-none gap-2 w-[34vw]">
          <h1 className="text-2xl font-briem text-green-600 font-medium">
            success submited
          </h1>
          <h2 className="text-4xl text-center font-semibold font-Manrope leading-[3.5rem]">
            Congratulations
          </h2>
          <p className=" text-center text-2xl">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
      </div>
      <h1 className="absolute left-1/2 bottom-10 -translate-x-1/2 -translate-y-1/2">
        Redirecting you to Homepage in{" "}
        <span className="font-medium">{countdown} Seconds</span>
      </h1>
    </div>
  );
};

export default Submit;
