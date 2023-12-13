import { Link } from "react-scroll";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="myProjects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="about_me"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="Contact_me"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact Me
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-10 bg-base-100 font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Khaled Ahmed Nayeem</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
