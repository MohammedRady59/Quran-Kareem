import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MoveText from "../components/UI/MoveText";

function Layout() {
  return (
    <div>
      <Navbar />
      <MoveText />
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Layout;
