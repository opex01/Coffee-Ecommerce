import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = ({sideBar, setSideBar}) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-100">
      <div className="p-[1rem] sm:p-[2rem] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
              duration: 1,
            }}
            className="text-2xl font-semibold uppercase"
          >
            <span className="text-primary">Blvck</span> Brew
          </motion.h1>
          {/* Hamburger Menu section */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
              duration: 1,
            }}
            onClick={() => setSideBar(!sideBar)}
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer relative lg:-top-3" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
