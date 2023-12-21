/* eslint-disable react/prop-types */
// pages/Work.jsx
import { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = ({ setActive }) => {
  useEffect(() => {
    setActive("home");
  }, [setActive]);

  return (
    <div className="flex flex-col justify-center h-full mb-1 w-full ">
      <div className="flex flex-row mt-1 ">
        <div className="flex flex-col w-2/3 ">
          <div className="flex  flex-row align-middle mt-[25%]">
            <p className="text-6xl font-extrabold text-[35px]">
              {" "}
              Hi, I am Fayaz Ahamed
            </p>
          </div>

          <h1 className="font-mediums text-[35px] mt-4 ml-24">
            Ready to
            <span className="slider">
              <span className="slider__word font-bold text-[35px] text-left ml-2">
                Collaborate
              </span>
              <span className="slider__word font-bold text-[35px] text-left ml-2">
                Develope
              </span>
              <span className="slider__word font-bold text-[35px] text-left ml-2">
                Innovate
              </span>
            </span>
          </h1>

          <div className="flex  flex-row ml-24">
            <Link to="/projects">
              <button className="bg-blue text-white h-8 w-24 text-center rounded-md mt-4">
                Projects
              </button>
            </Link>

            <Link to="/contact">
              <button className="text-blue boder h-8 w-24 border text-center rounded-md mt-4 ml-12 ">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-grow-0 justify-center w-1/3  h-[90%] mr-24">
          <p>
            <img
              className="h-[472px] w-full"
              src="../src/images/imgaboutNew1.png"
              alt="Post 1"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
