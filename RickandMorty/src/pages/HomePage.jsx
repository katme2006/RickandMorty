import rickandMortylogo from "../assets/Rick_and_Morty.svg";
import MyModal from "../components/Modal";
function HomePage() {
  return (
    <>
    <MyModal/>
      <div className="home-container">
        <img className="logo scale-up-center" src={rickandMortylogo} alt="Rick and Morty"></img>
       
      </div>
       <img className="pickle-rick scale-up-center" src='https://images.squarespace-cdn.com/content/v1/528252b7e4b00150d03a4848/1503802794992-D7KVFKY38DIPW04YDHD8/RickAndMorty_PickleRick1500.gif?format=1500w'/>

    </>
  );
}

export default HomePage;
