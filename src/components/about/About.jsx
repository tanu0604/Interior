import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/AboutImg.jpg";

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-black text-gray-200" id="about">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-semibold text-white text-center font-serif mb-12 tracking-wide"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Image */}
          <motion.div
            className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-xl"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg}
              alt="Interior design showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="w-full lg:w-1/2 text-lg leading-relaxed space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            <p className="italic text-gray-400 text-xl">
              "Designing spaces that tell your story."
            </p>
            <p>
              At <span className="font-semibold text-white">Interior Design Service</span>,
              we craft timeless interiors that blend functionality with
              aesthetics. Whether it's your home or office, we believe every
              space should reflect elegance, comfort, and personality.
            </p>
            <p>
              Our expert designers curate personalized solutions, transforming
              ideas into breathtaking realities. Let us elevate your living and
              working environment with a touch of sophistication.
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/9297820850"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black py-3 px-8 rounded-full text-lg font-medium shadow-md hover:bg-gray-200 transition-all duration-300"
            >
              Connect with Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
