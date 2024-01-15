/* eslint-disable react/prop-types */
import AppContent from "./AppContent";
import NavBar from "../Components/navBar";

const DefaultLayout = ({ active, setActive }) => {
  return (
    <>
      <div
        className={`flex flex-row w-[100vw] relative  ${
          active === "home" ? "bg-grey-dark" : "bg-grey"
        }`}
      >
        <div className="m-2 shadow w-full h-full">
          <NavBar active={active} setActive={setActive} />
          {/* <div className="flex h-[100vh-] my-1 justify-center"> */}
          <div className="flex flex-grow my-1 justify-center">
            <AppContent setActive={setActive} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
