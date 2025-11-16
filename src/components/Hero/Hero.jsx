import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackTumbler from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion, scale } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sideBar, setSideBar] = React.useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="p-[1rem] sm:p-[2rem] mx-auto">
          {/* NavBar Section */}
          <Navbar sideBar={sideBar} setSideBar={setSideBar} />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    Created for people who find confidence in simplicity and
                    beauty in minimalism. Our black tumblers merge long-lasting
                    quality with a timeless design, offering a stylish accessory
                    that complements your unique taste and accompanies you
                    through every part of your day.
                  </p>
                </div>
                <div className="absolute -top-6 -left-6 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero Image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.5,
                }}
                src={BlackTumbler}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange circle ring  */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                  duration: 1,
                }}
                className=" h-[180px] w-[180px] absolute top-20 -right-15 border-[20px] border-primary rounded-full z-10"
              ></motion.div>
              {/* big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                  duration: 1,
                }}
                className="absolute -top-15 left-[300px] z-1"
              >
                <h1 className="text-[100px] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>
            {/* Third div section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className=" opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Blvck Tumblers</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    A sleek, durable black tumbler crafted to keep your drinks
                    hot or cold while adding a touch of modern elegance to your
                    everyday routine.
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>

        {/* Sidebar Menu Section */}
        {sideBar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="  flex flex-col  justify-center items-center gap-6 text-white ">
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* social icons */}
                <div className="cursor-pointer hover:text-primaryDark">
                  <p>Home</p>
                </div>
                <div className="cursor-pointer hover:text-primaryDark">
                  <p>Services </p>
                </div>
                <div className="cursor-pointer hover:text-primaryDark">
                  <p>Order</p>
                </div>
                <div className="cursor-pointer hover:text-primaryDark">
                  <p>App</p>
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
