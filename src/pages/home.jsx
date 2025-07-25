import React from "react";
import { motion } from "motion/react";
import Stats from "../components/ui/Stats";
import Skills from "../components/ui/Skills";
import Footer from "../components/ui/Footer";
import SocialLinks from "../components/ui/SocialLinks";

function home() {
  return (
    <>
      <section id="home" className="relative items-center-safe justify-center">
        <div className="">
          <img src="/images/bg-2.png" alt="Background" className="" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 h-fit w-fit">
          <div className="flex flex-col w-154 mt-4 p-8 justify-center items-center rounded-b-3xl text-white bg-black/50">
            <p className="pb-4 text-3xl font-semibold">
              AI<span className=" text-2xl font-normal">/</span>ML Enthusiast,
              Problem Solver, and Emerging Developer
            </p>
            <p className="bg-clip-text py-3 text-2xl tracking-wide">
              I&apos;m Anuj Srijan, a full-stack developer crafting intelligent
              prototypes by blending creativity with code.
            </p>
            <SocialLinks />
          </div>
        </motion.div>
      </section>

      <Stats />
      <Skills />
      
      <Footer />
    </>
  );
}

export default home;
