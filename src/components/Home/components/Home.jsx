import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Features from "./Features/Features";
import RoadMap from "./RoadMap/RoadMap";
import Contact from "./Contact/Contact";
import TaskManagerAdd from "./TaskManagerAdd/TaskManagerAdd";
import DesktopHeader from "../../shared/DesktopHeader";
import Ourcourses from "./OurCourses/Ourcourses";

const Home = () => {
  return (
    <div>
      <DesktopHeader />
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
