"use client";

import helixImage from "../assets/images/helix2.png";
import emojistar from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <div className=" bg-black text-white py-16">
      <div className="flex flex-col justify-center items-center gap-7 relative">
        <motion.div className="absolute left-72 top-10" drag dragSnapToOrigin>
          <Image src={helixImage} alt="helixImage" draggable="false" />
        </motion.div>
        <motion.div
          className="absolute right-72 bottom-16 "
          drag
          dragSnapToOrigin
        >
          <Image src={emojistar} alt="emojistar" draggable="false" />
        </motion.div>

        <h2 className=" text-6xl max-md:text-4xl font-bold text-center tracking-tighter action">
          Get instant access
        </h2>
        <p className="text-gray-400 text-xl max-sm:text-lg text-center w-[600px] max-md:w-[360px] action">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className="flex flex-row  action">
          <input
            type="email"
            placeholder="your@email.com"
            className="py-2 px-4 bg-gray-700 text-white placeholder-gray-400 rounded-md w-[300px] max-md:w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500 "
          ></input>
          <button className="font-semibold tracking-tighter ml-3 bg-[linear-gradient(to_right,#F87BFF_0%,#FB92CF_24%,#FFD99B_48%,#C2F0B1_73%,#2FD8FE_100%)] text-[#012e33] rounded-lg px-7 py-2 transition-all hover:rounded-3xl active:translate-y-1 ">
            Get access{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
