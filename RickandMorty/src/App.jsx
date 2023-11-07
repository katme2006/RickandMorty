import "./App.css";
import { Outlet} from "react-router-dom";
import TopNav from "./components/NavBar";
import { useEffect, useState } from 'react'

function App() {

  const [favorites, setFavorites] = useState([]);

  useEffect(()=>{
    console.log(favorites)
  }, [favorites])

  return (
    <>
      <TopNav />
      <Outlet context={{favorites, setFavorites}}/>
    </>
  );
}

export default App;
