import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./component/Navbar";
import MenuSection from "./component/MenuSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-80 h-screen p-2 ">
          <MenuSection />
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
