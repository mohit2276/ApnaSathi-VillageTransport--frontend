// import React from "react";
// import logo from "../assets/hero.png";

// const Navbar = () => {
//   return (
//     <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full top-0 z-50 h-16">
//       {/* Left - Logo + Brand */}
//       <div className="flex items-center space-x-3">
//         <img
//           src={logo}
//           alt="ApnaSathi Logo"
//           className="max-h-10 w-auto object-contain" // logo big but capped
//         />
//         <span className="text-2xl font-bold">ApnaSathi</span>
//       </div>

//       {/* Right - Menu */}
//       <div className="flex space-x-6">
//         {["Login", "Services", "Contact Us"].map((item, idx) => (
//           <a
//             key={idx}
//             href={`#${item.toLowerCase().replace(" ", "")}`}
//             className="relative px-3 py-1 hover:bg-black/20 transition rounded"
//           >
//             {item}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/hero.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full top-0 z-50 h-16">
      {/* Left - Logo + Brand */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="ApnaSathi Logo"
          className="max-h-10 w-auto object-contain"
        />
        <span className="text-2xl font-bold">ApnaSathi</span>
      </div>

      {/* Right - Menu */}
      <div className="flex space-x-6">
        {location.pathname === "/login" ? (
          <>
            <Link
              to="/"
              className="relative px-3 py-1 hover:bg-black/20 transition rounded"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="relative px-3 py-1 hover:bg-black/20 transition rounded"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="relative px-3 py-1 hover:bg-black/20 transition rounded"
            >
              Login
            </Link>
            <a
              href="#services"
              className="relative px-3 py-1 hover:bg-black/20 transition rounded"
            >
              Services
            </a>
            <a
              href="#contact"
              className="relative px-3 py-1 hover:bg-black/20 transition rounded"
            >
              Contact Us
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
