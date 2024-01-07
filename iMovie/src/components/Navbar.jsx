import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import SearchBar from "./Searchbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          iMovie
        </Link>
      </h2>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
