import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Details } from "./components/Details";
import { NotFound } from "./components/NotFound";

export const Router = () => {
    return (
        <div>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="*" element={<NotFound />} />
           </Routes>
        </div>
    );
  };