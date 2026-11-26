import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ScaleOnView = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".card", {
       scale: 2,
       duration: 1,
        scrollTrigger: {
          trigger: '.card',
          start: "top 80%",
          markers: true
        },
      });
    },
    { scope: container },
  );
  return (
    <div ref={container} className="flex items-center justify-center flex-col">
      <div className="min-h-screen flex items-center justify-center w-full">
        <h1 className="text-4xl">On Visible Scale</h1>
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <div className="card">
          <div className="h-80 w-80 bg-slate-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ScaleOnView;
