import { NavLink, Outlet } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="nav-item font-weight-bold h2 mt-2">
                <NavLink end to ="/">Home</NavLink>
                <NavLink to="/articles">Articles</NavLink>
            </nav>
            <Outlet/>
        </>

    )
};
export default Navbar;