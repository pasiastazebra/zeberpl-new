import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import RightSide from "./components/right_side/RightSide";
import LeftSide from "./components/left_side/LeftSide";
import CenterSide from "./components/center_side/CenterSide";

function App() {
  return (
    <>
      <Navbar />
      <div className="page">
        <LeftSide />
        <CenterSide />
        <RightSide />
      </div>
    </>
  );
}

export default App;
