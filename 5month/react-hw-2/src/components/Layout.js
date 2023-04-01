import { Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <div>
            <div>
                HEADER
            </div>
                <Outlet/>
            <div>
                Footer
            </div>
        </div>
    );
}
 
export default Layout;