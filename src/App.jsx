import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/navBar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Work from "./pages/work";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

const App = () => {
  const [active, setActive] = useState("home");

  return (
    <>
      <div className={`flex h-screen flex-row ${active === "home" ? "bg-grey-dark" : "bg-grey"} relative overflow-auto`}>
        <Router>
          <div className="m-2">
            <NavBar active={active} setActive={setActive} />
            <div className="flex ml-[5%] h-fit mx-2 w-[94.5%] relative mb-24 ">
              <Routes>
                <Route path="/" element={<Home setActive={setActive} />} />
                <Route path="/home" element={<Home setActive={setActive} />} />
                <Route path="/about" element={<About setActive={setActive} />} />
                <Route path="/skills" element={<Skills setActive={setActive} />} />
                <Route path="/projects" element={<Projects setActive={setActive} />} />
                <Route path="/work" element={<Work setActive={setActive} />} />
                <Route path="/blog" element={<Blog setActive={setActive} />} />
                <Route path="/contact" element={<Contact setActive={setActive} />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;