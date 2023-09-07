import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import Line from "../../../shared/Line";

const Features = () => {
  return (
    <div className="pb-24">
      <Layout>
        <h5 className=" text-3xl font-semibold">What We Offer</h5>
        <Line prop={"mb-16"} />
        <div className=" grid grid-cols-1 md:grid-cols-4 justify-around items-center gap-2">
          <div className=" group shadow-xl  hover:shadow-gray-400 dark:hover:shadow-gray-900 flex items-center justify-center flex-col space-y-5 border-solid border-2 border-primary rounded-md py-5 px-2 hover:text-gray-200 hover:bg-primary transition-all duration-200 delay-75 ease-in-out">
            <ComputerDesktopIcon className="h-24 w-24 text-primary group-hover:text-gray-200 transition-all duration-200 delay-75 ease-in-out" />
            <div>
              <h6 className="text-2xl font-medium text-center">
                Learn Career Skills
              </h6>
              <p className="text-justify">
                Unlock the World of Coding with Ease: Learn to code, Manage
                Tasks, and Master Challenges! Elevate your coding skills and
                build a detailed profile to showcase your progress. Dive into
                the world of coding and start your adventure today!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Features;
