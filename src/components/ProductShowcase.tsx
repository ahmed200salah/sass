"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className=" bg-black text-white py-16 bg-gradient-to-b from-black to-[#5D2CA8]">
      <div className="flex  justify-center items-center flex-col gap-7 Product">
        <h2 className="text-6xl font-bold text-center tracking-tighter max-sm:text-4xl mx-auto">
          Intuitive interface
        </h2>
        <p className="w-[600px] max-sm:w-[400px] text-center text-gray-400 max-sm:px-7 mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={appScreen}
            alt="The Product ScreenShot"
            className="mt-10 px-7 max-sm:px-3"
            ref={imgRef}
          />
        </motion.div>
      </div>
    </div>
  );
};
