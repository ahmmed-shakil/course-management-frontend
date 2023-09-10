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
            <p>
              Unlock the World of Coding with Ease: Learn to code, Manage Tasks,
              and Master Challenges! Elevate your coding skills and build a
              detailed profile to showcase your progress. Dive into the world of
              coding and start your adventure today!
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CourseDetails;
