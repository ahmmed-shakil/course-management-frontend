import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Line from "../../../shared/Line";
import Courseimg from "../../../../images/hero-bg.webp";
import Badge from "../../../shared/Badge/Badge";
import ButtonPrimary from "../../../Buttons/ButtonPrimary";
import { useNavigate } from "react-router-dom";

const Ourcourses = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-14 pb-28">
      <Layout>
        <h5 className=" text-3xl font-semibold">Our Courses</h5>
        <Line prop={"mb-16"} />
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
          <div
            className="rounded-md shadow-md hover:shadow-2xl cursor-pointer"
            onClick={() => navigate(`/course-details/1`)}
          >
            <div className=" h-56 w-full rounded-md">
              <img
                src={Courseimg}
                alt="img"
                className=" rounded-tl-md rounded-tr-md h-full w-full  transition-all delay-200 duration-200 ease-in-out"
              />
            </div>
            <div className=" space-y-4 px-4 py-3">
              <div className=" flex justify-between items-center">
                <h2 className="text-xl font-semibold">Basic Javascript</h2>
                <Badge bg={"bg-primary"} text={"text-gray-200"} />
              </div>
              <Line />
              <div className=" flex justify-between items-center">
                <p>Lessons: 5</p>
                <p>Tasks: 5</p>
              </div>
              <p className=" text-justify">
                Unlock the World of Coding with Ease: Learn to code, Manage
                Tasks, and Master Challenges!
              </p>
              <div className=" flex justify-between items-center">
                <h6 className=" text-primary font-semibold">Price: Free</h6>
                {/* <button className=" border-solid border-2 border-primary hover:bg-primary hover:text-gray-200 transition-colors duration-150 delay-100 ease-in-out rounded-md px-3 py-2">
                  Start Course
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20 flex justify-center">
          <ButtonPrimary
            onClick={() => navigate("/our-courses")}
            text={"View All Courses"}
          />
        </div>
      </Layout>
    </div>
  );
};

export default Ourcourses;
