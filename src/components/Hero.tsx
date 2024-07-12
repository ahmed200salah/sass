"use client";
import Link from "next/link";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import CursorImage from "../assets/images/cursor.png";
import MessageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-12 relative overflow-clip">
      <div className="absolute rounded-[100%] top-[calc(100%-66px)] bg-black h-[750px] w-[1000px] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] left-1/2 -translate-x-1/2 border border-[#B48CDE] lg:w-[2400px] lg:h-[1200px]"></div>
      <div className="container relative px-7">
        <div className="flex items-center justify-center py-6 text-lg hero  ">
          <Link
            href="/"
            className="border active:translate-y-1 transition-all hover:bg-[#6d0ee1] rounded-lg px-4 py-1 border-white/30 inline-flex gap-3 font-semibold group"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text] group-hover:scale-105 transition-all">
              Version 2.0 is here{" "}
            </span>
            <span className="underline underline-offset-2 flex items-center gap-2 ">
              Read More
              <ArrowIcon className="group-hover:-rotate-45 transition-all scale-125" />
            </span>
          </Link>
        </div>
        <div className="flex justify-center">
          <div className=" inline-flex relative items-center text-center justify-center">
            <h1 className="text-7xl tracking-tighter text-left md:text-center font-bold py-7 hero">
              One <span>Task </span>
              at a<span className="text-red-400"> Time</span>
            </h1>
            <motion.div
              className="absolute -left-64 max-lg:-left-44 max-md:hidden drop-shadow-2xl"
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                width={200}
                height={200}
                alt="CursorImage"
                className="max-w-none rotate-45"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute -right-64 max-lg:-right-48 max-md:hidden drop-shadow-2xl"
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                width={200}
                height={200}
                alt="MessageImage"
                className="rotate-45"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center hero">
          <p className="text-xl mb-7 font-medium text-left md:text-center tracking-tight md:text-xl w-[800px] ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center items-center hero">
          <button className="border border-white px-7 py-2 rounded-lg transition-all hover:rounded-3xl active:translate-y-1 font-semibold tracking-tighter hover:bg-white hover:text-black">
            See Plans
          </button>
          <button className="ml-7 bg-[linear-gradient(to_right,#F87BFF_0%,#FB92CF_24%,#FFD99B_48%,#C2F0B1_73%,#2FD8FE_100%)] text-[#004850] rounded-lg px-7 py-2 transition-all hover:rounded-3xl active:translate-y-1 font-semibold tracking-tighter ">
            Get For Free
          </button>
        </div>
      </div>
    </div>
  );
};
