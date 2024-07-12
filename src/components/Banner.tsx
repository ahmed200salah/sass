"use client";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Banner = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".banner",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power1.inOut" }
    );
    tl.from(".navbarLogo", {
      opacity: 0,
      x: -100,
      duration: 0.3,
      ease: "power1.inOut",
      stagger: 0.2,
    });
    tl.from(".navLinks", {
      opacity: 0,
      x: 100,
      duration: 0.3,
      ease: "power1.inOut",
      stagger: 0.2,
    });
    tl.from(".hero", {
      opacity: 0,
      y: 100,
      scale: 0,
      duration: 0.9,
      ease: "expo",
      stagger: 0.2,
    });
    gsap.from(".feature", {
      scrollTrigger: {
        trigger: ".feature",
      },
      y: 200,
      opacity: 0,
      ease: "expo",
      duration: 1,
      scale: 0,
      stagger: 0.2,
    });
    gsap.from(".featuree", {
      scrollTrigger: {
        trigger: ".featuree",
      },
      y: 200,
      duration: 1,
      opacity: 0,
      ease: "expo",
      stagger: 0.2,
    });
    gsap.from(".Product", {
      scrollTrigger: {
        trigger: ".Product",
      },
      y: 200,
      duration: 1,
      opacity: 0,
      ease: "expo",
      stagger: 0.2,
    });
    gsap.from(".faq", {
      scrollTrigger: {
        trigger: ".faq",
      },
      y: 200,
      duration: 1,
      opacity: 0,
      ease: "expo",
      stagger: 0.2,
    });
    gsap.from(".action", {
      scrollTrigger: {
        trigger: ".action",
      },
      y: 200,
      duration: 1,
      opacity: 0,
      ease: "expo",
      stagger: 0.2,
    });
    gsap.from(".footer", {
      scrollTrigger: {
        trigger: ".footer",
      },
      x: 200,
      duration: 1,
      opacity: 0,
      ease: "expo",
      stagger: 0.2,
    });
  });

  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,214,255,0.7),rgb(41,216,255,0.7),rgb(255,253,128,0.7),rgb(248,154,191,0.7),rgb(252,214,255,0.7))]  banner">
      <div className="container">
        <p className="font-bold tracking-tighter text-[#141b59] text-xl max-md:text-lg">
          <span className="hidden md:inline banner">
            Introducing a completely redesigned interface —{" "}
          </span>
          <span className="active:translate-y-2">
            <Link
              href="/"
              className="underline decoration-[#131842] underline-offset-4 hover:text-[#6b68f9] hover:decoration-[#6b68f9] transition-all"
            >
              Explore the demo 🥳
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
