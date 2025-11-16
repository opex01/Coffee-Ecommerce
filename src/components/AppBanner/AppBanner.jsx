import React from "react";
import bannerImg from "../../assets/coffee-cover.jpg";
import appStore from "../../assets/app_store.png";
import playStore from "../../assets/play_store.png";
import { motion } from "framer-motion";

const bannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const AppBanner = () => {
  return (
    <div className="p-[1rem] sm:p-[2rem] mx-auto my-14">
      <div
        style={bannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-2xl text-center sm:text-4xl font-semibold"
            >
              Download the app
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-center sm:px-20"
            >
              Experience coffee ordering made simple. Get exclusive deals, track
              your orders, and enjoy faster checkout with our mobile app.
            </motion.p>
          </div>
        </div>
        {/* Images Link */}
        <div className="flex justify-center items-center gap-4">
          <a
            href="#"
            className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
          >
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              src={appStore}
              alt="App Store"
            />
          </a>
          <a
            href="#"
            className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
          >
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
              src={playStore}
              alt="Play Store"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
