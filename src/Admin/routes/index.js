import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../components/Home/components/Home";
import TaskManager from "../../components/TaskManager/TaskManager";
import AllCourses from "../../components/AllCourses/AllCourses";
import CourseDetails from "../../components/Courses/CourseDetails";
import Login from "../../components/Auth/Login/Login";

export const adminPages = [
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

const AdminRoutes = () => {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        {adminPages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
        {/* <Route element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRoutes;
