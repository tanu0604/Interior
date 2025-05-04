import React, { useEffect } from "react";
import headingImg from "../../assets/hero.jpg";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../about/About";
import Gallery from "../library/Gallery";
import PriceCalculator from "../PriceCalculator/PriceCalculator";
import WhatsappForm from "../form/WhatsappForm";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section
        className="relative w-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
        id="home"
      >
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={headingImg}
            alt="Interior design background"
            className="w-full h-full object-cover brightness-[0.6] blur-[0.5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>

        {/* Content with text and CTA */}
        <div className="container relative h-full flex items-center justify-center text-center p-4 pt-24 lg:pt-32">
          <div className="max-w-3xl space-y-6">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to{" "}
              <span className="text-gray-200">Interior Design Service</span>
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 italic">
              Transform your space with elegance and creativity.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://wa.me/9297820850"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-medium rounded-full text-lg px-10 py-3 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up">
        <About />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Gallery />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <PriceCalculator />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <WhatsappForm />
      </div>
    </>
  );
}
