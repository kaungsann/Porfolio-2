import "./BlackHole.css";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import portfolio from "../../assets/images/myport2.png";
import { useState } from "react";

function BlackHole({ removeHole }) {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <div
        className={`bg-[#050d24] overflow-hidden opacity-95 fixed top-0 left-0 w-full h-screen  right-0 z-30 ${
          removeHole ? " transition ease-in-out delay-150 duration-300" : ""
        }`}
      >
        <main className="relative circleBox">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>

          <div
            style={{ transform: "skewZ(12deg)" }}
            className="skew-box -skew-y-12 z-50 flex flex-col items-center justify-center mr-8"
          >
            <h2
              style={{ transform: "skewZ(12deg)" }}
              className="mx-auto mb-6 md:mb-12 w-52 sm:w-96 text-center text-md z-50 font-semibold leading-tight tracking-tight text-slate-700 sm:text-2xl lg:text-3xl"
            >
              Looking for a different site? Go back in time...
            </h2>
            <div
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
              className="relative z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <a href="https://kaungsann.github.io/my-portfolio/" className="">
                <img
                  src={portfolio}
                  alt="PORTFOLIO VERSION-0.1"
                  className="w-40  h-24 md:w-72 md:h-40 rounded-md shadow-md"
                />
                {showText && (
                  <h2 className="lg:text-3xl md:text-xl text-lg w-full bg-slate-400 bg-opacity-75 flex justify-center items-center absolute top-0 right-0 left-0 bottom-0  text-white font-extrabold">
                    V1
                  </h2>
                )}
              </a>

              {showText && (
                <span className="absolute right-2 top-2 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
              )}
            </div>
          </div>
        </main>

        <span
          className="absolute right-4 top-2"
          onClick={() => removeHole(false)}
        >
          <Icon
            icon="oui:cross"
            className="text-3xl text-slate-400 cursor-pointer hover:text-slate-200"
          />
        </span>
      </div>
    </>
  );
}

BlackHole.propTypes = {
  removeHole: PropTypes.bool,
};

export default BlackHole;
