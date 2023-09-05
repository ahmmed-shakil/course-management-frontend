import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import ButtonPrimary from "../../../Buttons/ButtonPrimary";
import AnalogClock from "./components/AnalogClock";

const HeroSection = () => {
  return (
    <div className=" flex items-center py-36" style={{ minHeight: "80vh" }}>
      <Layout>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-between items-center">
          <div className=" space-y-6">
            <h2 className="text-4xl text-primary font-bold">
              LET'S GROW WITH CODEMASTER
            </h2>
            <p className="text-xl font-normal">
              One stop solution to code your carrer
            </p>
            <p className="text-lg font-extralight">
              Unlock the World of Coding with Ease: Learn to code, Manage Tasks,
              and Master Challenges! Elevate your coding skills and build a
              detailed profile to showcase your progress. Dive into the world of
              coding and start your adventure today!
            </p>
            <ButtonPrimary text={"Explore Courses"} />
          </div>
          <div className=" flex justify-end">
            <AnalogClock />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HeroSection;
