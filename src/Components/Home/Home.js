import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className="main-container">
      <div className="main-text">
        <h1 className="top-text">Your Next Guitar</h1>
        <h1 className="bottom-text">Your Best Music</h1>
        <p className="main-text-paragraph">
          There are a lot of different guitar brands that are available on the market, and it can be overwhelming to find the right musical instrument, but We offers a top quality guitar, with a great sound for beginning guitar players, all at an affordable price.
        </p>
        <button className='shop-button'>Shop Now</button>
      </div>
      <div className="guitar">
        <img
          src="https://img.freepik.com/free-vector/guitars-icons-acoustic-guitars-electric-guitar-illustration_1284-53031.jpg?t=st=1649141712~exp=1649142312~hmac=4a0caa55b67eea6904dbaa3d1ca16e6a6a46776e6b00c3f902a005d0b20a128b&w=740"
          alt="home-img"
        />
      </div>
    </div>
  );
};

export default Home;