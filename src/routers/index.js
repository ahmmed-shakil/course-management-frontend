import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/components/Home";
import DesktopHeader from "../components/shared/DesktopHeader";
import DesktopFooter from "../components/DesktopFooter";
import TaskManager from "../components/TaskManager/TaskManager";
import AllCourses from "../components/AllCourses/AllCourses";
import Login from "../components/Auth/Login/Login";
import CourseDetails from "../components/Courses/CourseDetails";

export const pages = [
  {
    path: "/",
    exact: true,
    component: Home,
    key: "home",
    value: "Home",
    show: true,
  },
  {
    path: "/task-manager",
    exact: true,
    component: TaskManager,
    key: "task-manager",
    value: "Task Manager",
    show: true,
  },
  {
    path: "/our-courses",
    exact: true,
    component: AllCourses,
    key: "our-courses",
    value: "Our Courses",
    show: true,
  },
  {
    path: "/course-details/:id",
    exact: true,
    component: CourseDetails,
    key: "course-details",
    value: "Course Details",
    show: false,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    key: "login",
    value: "Login",
    show: false,
  },
];

const MyRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <DesktopHeader />
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
        {/* <Route element={<Page404 />} /> */}
      </Routes>
      <DesktopFooter />
    </BrowserRouter>
  );
};

export default MyRoutes;
