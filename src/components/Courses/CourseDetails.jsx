import React from "react";
import { Layout } from "../shared/Layout/Layout";
import Line from "../shared/Line";

const CourseDetails = () => {
  return (
    <div className="pt-6">
      <Layout>
        <div className=" space-y-6">
          <div>
            <h3 className=" text-xl lg:text-4xl">Basic Javascript</h3>
            <Line prop={"mb-10"} />
            <div className="max-w-lg mx-auto bg-primary text-gray-200 p-3 shadow-lg rounded-md mb-8 space-y-6">
              <div className="flex items-center justify-between">
                <h6 className="text-xl font-medium">Total Lessons: 15</h6>
                <h6 className="text-xl font-medium">Completed: 5</h6>
              </div>
              <div className="relative">
                <div className="bg-gray-200 w-full h-1 rounded-md"></div>
                <div
                  className="absolute top-0 bg-gray-800 h-1 rounded-md"
                  style={{ width: `${(10 / 15) * 100}%` }}
                ></div>
                <p>{parseInt((10 / 15) * 100)} %</p>
              </div>
            </div>

            <p>
              Unlock the World of Coding with Ease: Learn to code, Manage Tasks,
              and Master Challenges! Elevate your coding skills and build a
              detailed profile to showcase your progress. Dive into the world of
              coding and start your adventure today!
            </p>
          </div>
          <h6 className=" text-xl font-medium">All Lessons</h6>
          <Line />
          <div className=" grid grid-cols-1 lg:grid-cols-4">
            <div className=" bg-primary text-gray-200 rounded-md shadow-md hover:shadow-2xl hover:scale-105 transition-all delay-200 ease-in-out duration-150 flex items-center justify-center py-2 gap-3 cursor-pointer">
              <p className=" font-medium">1. What is Javascript</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CourseDetails;
