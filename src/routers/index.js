import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/components/Home";
import DesktopHeader from "../components/shared/DesktopHeader";

export const pages = [
    {
        path:"/",
        exact : true,
        component : Home,
        key:"home",
        value:"Home"
    }
]

const MyRoutes = ()=>{

    return (
        <BrowserRouter basename="/">
        <DesktopHeader/>
         <Routes>
            {pages.map(({ component, path }) => {
              const Component = component;
              return <Route key={path} element={<Component />} path={path} />;
            })}
            {/* <Route element={<Page404 />} /> */}
          </Routes>
        </BrowserRouter>
    )
    
}


export default MyRoutes