"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black flex flex-col gap-7 py-20 sm:py-24 ">
      <div className="container">
        <h1 className="text-2xl text-[#5d5d5d] py-4 text-center font-bold hero">
          Trusted by the world&apos;s most innovative teams
        </h1>
        <div className="overflow-hidden flex before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-10 after:w-10 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            initial={{
              translateX: 0,
            }}
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex flex-none gap-16 mt-7 justify-center pr-16"
          >
            {images.map((item, i) => (
              <Image
                src={item.src}
                alt={item.alt}
                key={i}
                className="flex-none w-auto h-8"
              />
            ))}
            {images.map((item, i) => (
              <Image
                src={item.src}
                alt={item.alt}
                key={i}
                className="flex-none w-auto h-8"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
