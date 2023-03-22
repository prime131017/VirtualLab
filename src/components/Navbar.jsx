import { NavLink, Outlet } from "react-router-dom";
const Navbar = () => {
    return (
        // <>
        //     <nav className="navItem">
        //         <NavLink className="navLink" href="sharetrade.com">SHARETRADE.com</NavLink>
        //     </nav>
        //     <Outlet/>
        // </>
   <>
   <nav className="navItem">
       <NavLink className="navLink" to="/articles">SHARETRADE.com</NavLink>
   </nav>
   <Outlet/>
</>
    )
};
export default Navbar;