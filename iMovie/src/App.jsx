import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <h2>iMovie</h2>
      <Outlet />
    </div>
  );
}
export default App;
