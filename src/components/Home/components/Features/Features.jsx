import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

const Features = () => {
  return (
    <div className="pb-24">
      <Layout>
        <h5 className=" text-3xl font-semibold mb-16">What We Offer</h5>
        <div className=" grid grid-cols-1 md:grid-cols-4 justify-around items-center gap-2">
          <div className="group flex items-center justify-center flex-col space-y-5 border-solid border-2 border-primary rounded-md py-5 px-2 hover:text-gray-200 hover:bg-primary transition-all duration-200 delay-75 ease-in-out">
            <ComputerDesktopIcon className="h-24 w-24 text-primary group-hover:text-gray-200 transition-all duration-200 delay-75 ease-in-out" />
            <div className=" text-left">
              <h6 className="text-2xl font-medium">Learn Carrer Skills</h6>
              <p>
                Unlock the World of Coding with Ease: Learn to code, Manage
                Tasks, and Master Challenges! Elevate your coding skills and
                build a detailed profile to showcase your progress. Dive into
                the world of coding and start your adventure today!
              </p>
            </div>
          </div>
          <div className="group flex items-center justify-center flex-col space-y-5 border-solid border-2 border-primary rounded-md py-5 px-2 hover:text-gray-200 hover:bg-primary transition-all duration-200 delay-75 ease-in-out">
            <ComputerDesktopIcon className="h-24 w-24 text-primary group-hover:text-gray-200 transition-all duration-200 delay-75 ease-in-out" />
            <div className=" text-left">
              <h6 className="text-2xl font-medium">Learn Carrer Skills</h6>
              <p>
                Unlock the World of Coding with Ease: Learn to code, Manage
                Tasks, and Master Challenges! Elevate your coding skills and
                build a detailed profile to showcase your progress. Dive into
                the world of coding and start your adventure today!
              </p>
            </div>
          </div>
          <div className="group flex items-center justify-center flex-col space-y-5 border-solid border-2 border-primary rounded-md py-5 px-2 hover:text-gray-200 hover:bg-primary transition-all duration-200 delay-75 ease-in-out">
            <ComputerDesktopIcon className="h-24 w-24 text-primary group-hover:text-gray-200 transition-all duration-200 delay-75 ease-in-out" />
            <div className=" text-left">
              <h6 className="text-2xl font-medium">Learn Carrer Skills</h6>
              <p>
                Unlock the World of Coding with Ease: Learn to code, Manage
                Tasks, and Master Challenges! Elevate your coding skills and
                build a detailed profile to showcase your progress. Dive into
                the world of coding and start your adventure today!
              </p>
            </div>
          </div>
          <div className="group flex items-center justify-center flex-col space-y-5 border-solid border-2 border-primary rounded-md py-5 px-2 hover:text-gray-200 hover:bg-primary transition-all duration-200 delay-75 ease-in-out">
            <ComputerDesktopIcon className="h-24 w-24 text-primary group-hover:text-gray-200 transition-all duration-200 delay-75 ease-in-out" />
            <div className=" text-left">
              <h6 className="text-2xl font-medium">Learn Carrer Skills</h6>
              <p>
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
