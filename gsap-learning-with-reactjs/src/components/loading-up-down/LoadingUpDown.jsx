import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
gsap.registerPlugin(useGSAP);

const LoadingUpDown = () => {
  const container = useRef(null);

  useGSAP(() => {
  const tl = gsap.timeline({
    repeat: -1,
    defaults: {
      duration: 0.3,
      ease: "power2.inOut",
    },
  });

  tl.to(".dot1", { y: -15 })
    .to(".dot2", { y: -15 }, "-=0.15")
    .to(".dot3", { y: -15 }, "-=0.15")
    .to(".dot3", { y: 0 })
    .to(".dot2", { y: 0 }, "-=0.15")
    .to(".dot1", { y: 0 }, "-=0.15");

}, { scope: container });

  return (
    <div
      ref={container}
      className="min-h-screen w-full flex items-center justify-center"
    >
      <div className="flex gap-x-5">
        <div className="dot1 h-10 w-10 rounded-full bg-white"></div>
        <div className="dot2 h-10 w-10 rounded-full bg-white"></div>
        <div className="dot3 h-10 w-10 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default LoadingUpDown;
