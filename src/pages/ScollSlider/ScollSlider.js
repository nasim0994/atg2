import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";
import image4 from "../../images/4.png";
import { BsArrowRight } from "react-icons/bs";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const ScollSlider = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    let panels = gsap.utils.toArray(".panel"),
      scrollTween;

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * 0, autoKill: false },
        duration: 0.1,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=100%",
        onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
      });
    });

    // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });

    ScrollTrigger.normalizeScroll(true);
  }, []);
  return (
    <div>
      <div className="relative">
        <section className="panel color1 flex" id="section1">
          <div className="text-white w-[40%] flex items-end px-10 pb-20">
            <div className="w-full">
              <h2 className="text-3xl">ABC 678</h2>
              <p>
                Best Since 2017 <br /> we offer wide range <br />
                Web Development and app Development
              </p>
              <div className="flex justify-between">
                <p className="mt-6 flex gap-2 items-center">
                  View Case Study <BsArrowRight />
                </p>
                <p className="mt-6">SKIP</p>
              </div>
            </div>
          </div>
          <div className="w-[60%] bg-[#CCCCCE]">
            <img src={image1} alt="" className="h-[100vh] w-full" />
          </div>
        </section>

        <section className="panel color2 flex" id="section2">
          <div className="text-white w-[40%] flex items-end px-10 pb-20">
            <div className="w-full">
              <h2 className="text-3xl">ABC 425</h2>
              <p>
                We are best <br /> web development Company <br />
                in the world
              </p>
              <div className="flex justify-between mt-6">
                <p>Coming Soon</p>
                <p>SKIP</p>
              </div>
            </div>
          </div>
          <div className="w-[60%] bg-[#1C0362]">
            <img src={image2} alt="" className="h-[100vh] w-full" />
          </div>
        </section>

        <section className="panel color3 flex" id="section3">
          <div className="text-white w-[40%] flex items-end px-10 pb-20">
            <div className="w-full">
              <h2 className="text-3xl">ABC 425</h2>
              <p>
                We are best <br /> web development Company <br />
                in the world
              </p>
              <div className="flex justify-between mt-6">
                <p className="flex gap-2 items-center">
                  View Case Study <BsArrowRight />
                </p>
                <p>SKIP</p>
              </div>
            </div>
          </div>
          <div className="w-[60%] bg-[#0D131B]">
            <img src={image3} alt="" className="h-[100vh] w-full" />
          </div>
        </section>

        <section className="panel color4 flex" id="section4">
          <div className="text-white w-[40%] flex items-end px-10 pb-20">
            <div className="w-full">
              <h2 className="text-3xl">ABC 425</h2>
              <p>
                We are best <br /> web development Company <br />
                in the world
              </p>
              <div className="mt-6 flex justify-between">
                <p className="flex gap-2 items-center">
                  View Case Study <BsArrowRight />
                </p>
                <p>SKIP</p>
              </div>
            </div>
          </div>
          <div className="w-[60%] bg-[#00B769]">
            <img src={image4} alt="" className="h-[100vh] w-full" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScollSlider;
