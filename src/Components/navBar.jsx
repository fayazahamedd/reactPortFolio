/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export const navLinks = [
  {
    id: "home",
    title: "HOME",
  },
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "skills",
    title: "SKILLS",
  },
  {
    id: "projects",
    title: "PROJECTS",
  },
  {
    id: "work",
    title: "WORK",
  },
  {
    id: "blog",
    title: "BLOG",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

const NavBar = ({ active, setActive }) => {
  return (
    <>
      <nav className=" flex items-center justify-between mx-2 p-1">
        <span className="p-3 justify-stretch ml-9 text-[20px] font-extrabold uppercase text-blue mr-12">Fayaz Ahamed D</span>
        <ul className="flex justify-end mr-6">
          {navLinks.map((item, index) => (
            <li
              className={` font-semibold text-[20px] p-2 ${
                active === item.id ? "text-blue" : "text-true-black"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              key={index}
              onClick={() => setActive(item.id)}
            >
              <Link to={`/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;