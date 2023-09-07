import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Features from "./Features/Features";
import Ourcourses from "./OurCourses/Ourcourses";
import RoadMap from "./RoadMap/RoadMap";
import Contact from "./Contact/Contact";
import TaskManagerAdd from "./TaskManagerAdd/TaskManagerAdd";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Ourcourses />
      <TaskManagerAdd />
      <RoadMap />
      <Contact />
    </div>
  );
};

export default Home;
