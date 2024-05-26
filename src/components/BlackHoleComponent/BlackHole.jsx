import "./BlackHole.css";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

// import roundImg from "../../assets/images/blackhole.gif";

function BlackHole({ removeHole }) {
  return (
    <>
      {/* <div className="mainBox">
        <main className="relative circleBox">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </main>
        <span
          className="absolute right-0 top-4"
          onClick={() => removeHole(false)}
        >
          <Icon
            icon="oui:cross"
            className="text-3xl text-slate-400 cursor-pointer hover:text-slate-500"
          />
        </span>
      </div> */}
      <div className="bg-[#050d24] overflow-hidden opacity-95 fixed top-0 left-0 w-full h-screen  right-0 z-50">
        <main className="relative circleBox">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </main>

        <span
          className="absolute right-4 top-2"
          onClick={() => removeHole(false)}
        >
          <Icon
            icon="oui:cross"
            className="text-3xl text-slate-400 cursor-pointer hover:text-slate-500"
          />
        </span>
      </div>

      {/* <div>
        <img
          src={roundImg}
          alt=""
          className="fixed top-0 bottom-0 right-0 left-0 w-full h-full object-cover"
        />
        <span
          className="z-40 text-4xl absolute top-0 right-4"
          onClick={() => removeHole(false)}
        >
          X
        </span>
      </div> */}

      {/* <div>
        <h2>hello i am blackhole</h2>
      </div> */}
    </>
  );
}

BlackHole.propTypes = {
  removeHole: PropTypes.bool,
};

export default BlackHole;
