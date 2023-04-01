import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { route, studentsRoute, teachersRoute } from "./config/routerConfig";

const AppRouter = () => {
    
    const role = 'teacher'

    return ( 
        <Routes>
                {route.map((item) => 
                    <Route path={item.path} element={item.element}/>
                )}
                {role === 'student' && (
                    studentsRoute.map((item) => 
                        <Route path={item.path} element={item.element}/>
                    ) 
                )}
                {role === 'teacher' && (
                    teachersRoute.map((item) => 
                       <Route path={item.path} element={item.element}/>
                   ) 
                )}
                <Route path='*' element={<Navigate to={'/'}/>}/>
        </Routes>
    );
}
 
export default AppRouter;