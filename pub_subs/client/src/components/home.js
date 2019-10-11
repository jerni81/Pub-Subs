import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div className="home">
      <Link to="/menu">
        <img
          src="https://cutpcdnwimages.azureedge.net/-/media/images/publix/shop-online/instore3x.png"
          alt="sandwich"
          className="photo"
        />
        <h1>Menu</h1>
      </Link>
      <Link to="/create">
        <img
          src="https://cutpcdnwimages.azureedge.net/-/media/images/publix/shop-online/delivery2x.png"
          alt="grocery bag"
          className="photo"
        />
        <h1>Create Your Own</h1>
      </Link>
    </div>
  );
};

export default Home;
