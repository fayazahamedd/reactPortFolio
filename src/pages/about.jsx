/* eslint-disable react/prop-types */
// pages/Work.jsx
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBiking,
  faBook,
  faCab,
  faFootball,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const About = ({ setActive }) => {
  useEffect(() => {
    setActive("about");
  }, [setActive]);

  return (
    <>
      <div className="flex flex-col md:flex-row bg-white w-full md:w-[80%] lg:w-[94%] h-[100%] rounded-2xl overflow-hidden">
        <div className="flex-shrink-0 h-[300px] md:h-[450px] w-full md:w-[40%]">
          <img
            className="rounded-2xl m-2 w-full h-full object-cover"
            src="../src/images/imgabout.JPG"
            alt="img"
          />
        </div>
        <div className="flex flex-col ml-0 md:ml-4 lg:ml-[65px] w-1/2 md:w-[60%] relative">
          <div className="relative">
            <p className="uppercase font-bold text-blue mt-5 text-lg md:text-xl lg:text-2xl">
              My intro
            </p>
            <p className="font-mediums text-true-black mt-2 w-1/2 md:w-[80%] lg:w-[90%]">
              To become a successful expert in the field of Information
              Technology by channelizing my technical knowledge and skills to
              ensure personal and professional growth and to contribute to the
              prosperity of the organization.
            </p>

            <div className="mt-5 flex flex-col justify-start items-center">
              <p>
                <span className="font-bold">Name: </span>{" "}
                <span className="hover:text-blue">Fayaz Ahamed D</span>
              </p>
              <p>
                <span className="font-bold">Location: </span>{" "}
                <span className="hover:text-blue">Bangalore</span>
              </p>
              <p>
                <span className="font-bold">Profile: </span>{" "}
                <span>
                  <a
                    href="https://github.com/fayazahamedd/Full-Stack"
                    className="hover:text-blue"
                  >
                    Developer
                  </a>{" "}
                </span>
              </p>
              <p>
                <span className="font-bold">Email: </span>{" "}
                <span>
                  <a
                    href="mailto:connectwithfayazahamed@gmail.com"
                    className="hover:text-blue"
                  >
                    connectwithfayazahamed@gmail.com
                  </a>
                </span>
              </p>
              <p>
                <span className="font-bold">Phone: </span>{" "}
                <span>
                  <a
                    href="whatsapp://send?text=The text to share!"
                    data-action="share/whatsapp/share"
                    className="hover:text-blue"
                  >
                    +91 9787555277
                  </a>
                </span>
              </p>
            </div>
            <div className="my-5 h-10 relative">
              <p className="uppercase font-bold text-blue mb-5">
                Extra curricular activities
              </p>

              <ul className="pr-2 relative flex flex-col md:flex-row mt-2 items-center">
                <li className="border border-r-8 p-2 rounded-full border-blue w-10 md:mr-4">
                  <FontAwesomeIcon icon={faMusic} />
                </li>
                <span className="mr-4">Music</span>
                <li className="border border-r-8 p-2 rounded-full border-blue w-10 md:mr-4">
                  <FontAwesomeIcon icon={faBiking} />
                </li>
                <span className="mr-4">Bike</span>
                <li className="border border-r-8 p-2 rounded-full border-blue w-10 md:mr-4">
                  <FontAwesomeIcon icon={faCab} />
                </li>
                <span className="mr-4">Car</span>
                <li className="border border-r-8 p-2 rounded-full border-blue w-10 md:mr-4">
                  <FontAwesomeIcon icon={faFootball} />
                </li>
                <span className="mr-4">Football</span>
                <li className="border border-r-8 p-2 rounded-full border-blue w-10 md:mr-4">
                  <FontAwesomeIcon icon={faBook} />
                </li>
                <span>Book</span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
