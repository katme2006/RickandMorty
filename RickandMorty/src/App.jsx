import "./App.css";
import { Outlet, Link } from "react-router-dom";
import TopNav from "./components/NavBar";

function App() {
  return (
    <>
      <TopNav />

      <Outlet />
    </>
  );
}

export default App;
