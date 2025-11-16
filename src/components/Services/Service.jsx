import React from "react";
import { delay, motion } from "framer-motion";
import Coffee1 from "../../assets/coffee1.png";
import Coffee2 from "../../assets/coffee3.png";
import Coffee3 from "../../assets/coffee1.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitile:
      "The Black Cover is crafted to bring a touch of sophistication to your daily routine, offering both style and protection in a sleek, minimalist design you’ll enjoy every day.",
  },
  {
    id: 2,
    image: Coffee2,
    title: "Hot Coffee",
    subtitile:
      "Start your day with a perfectly brewed cup of hot coffee, rich, aromatic, and crafted to give you a warm, cozy boost that makes every morning feel special.",
  },
  {
    id: 3,
    image: Coffee3,
    title: "Cold Coffee",
    subtitile:
      "Refresh yourself with our chilled coffee, smooth, flavorful, and designed to cool you down while keeping that bold coffee taste you love in every sip.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut", // Use an easing function for smoother transition
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,  // delay between the appearance of each card
    },
  },
};

const Service = () => {
  return (
    <div className="p-[1rem] sm:p-[2rem] mx-auto my-16 space-y-4">
      {/* Header Section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2, //added delay for the first element
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary ">Tasty Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 1, //added delay for the first element
          }}
          className="text-sm opacity-50"
        >
          Enjoy coffee that feels rich, smooth, and freshly made just for you.
          It’s the kind of drink that makes your day feel a little fancier and a
          lot more fun.
        </motion.p>
      </div>

      {/* Card Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 "
      >
        {servicesData.map((service) => (
          <motion.div
            variants={cardVariants}
            className="text-center p-4 space-y-6"
          >
            <img
              src={service.image}
              alt=""
              className="img-shadow2 mx-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text--darkGray ">{service.subtitile}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
