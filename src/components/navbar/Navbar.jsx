import Link from "../link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="text-black p-6 bg-yellow-400">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static bg-yellow-400 px-6 ${
          open ? "top-20" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={routes.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
