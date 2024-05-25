// import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  // const [cursorX, setCursorX] = useState(0);
  // const [cursorY, setCursorY] = useState(0);
  // const [deviceType, setDeviceType] = useState("");
  // const [isClicking, setIsClicking] = useState(false);
  // const [buttonHovered, setButtonHovered] = useState(false);

  // check if it is a touch device
  // const isTouchDevice = () => {
  //   try {
  //     document.createEvent("TouchEvent");
  //     setDeviceType("touch");
  //     return true;
  //   } catch (e) {
  //     setDeviceType("mouse");
  //     return false;
  //   }
  // };

  // const move = (e) => {
  //   const touchEvent = e.touches ? e.touches[0] : null;
  //   const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
  //   const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

  //   setCursorX(x);
  //   setCursorY(y);

  //   // Set the cursor border's position directly
  //   const cursorBorder = document.getElementById("cursor-border");
  //   if (cursorBorder) {
  //     cursorBorder.style.left = `${x}px`;
  //     cursorBorder.style.top = `${y}px`;
  //   }
  // };

  // const handleMouseDown = () => {
  //   setIsClicking(true);
  // };

  // const handleMouseUp = () => {
  //   setIsClicking(false);
  // };

  // const handleButtonHover = (hovered) => {
  //   setButtonHovered(hovered);
  // };

  // useEffect(() => {
  //   document.addEventListener("mousemove", move);
  //   document.addEventListener("touchmove", move);
  //   document.addEventListener("mousedown", handleMouseDown);
  //   document.addEventListener("mouseup", handleMouseUp);

  //   return () => {
  //     document.removeEventListener("mousemove", move);
  //     document.removeEventListener("touchmove", move);
  //     document.removeEventListener("mousedown", handleMouseDown);
  //     document.removeEventListener("mouseup", handleMouseUp);
  //   };
  // }, []);
  return (
    <>
      {/* <style>
        {`
        #cursor-border {
          position: absolute;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background-color:#082f49;
          pointer-events: none;
        
        }
        #cursor-border {
          position: absolute;
          width: 350px;
          height: 300px;
          opacity: 0.2;
          box-shadow: 0 0 50px 50px rgba(5, 13, 36, 0.2); 
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
      }
      `}
      </style> */}
      <div
        id="cursor"
        // style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      ></div>
      <div id="cursor-border"></div>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
