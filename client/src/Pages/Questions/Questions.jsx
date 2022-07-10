import React from 'react';
import "../../App.css";
import HomeMainbar from '../../Components/HomeMainbar/HomeMainbar.jsx';
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar.jsx';
import RightSidebar from '../../Components/RightSidebar/RightSidebar.jsx';

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className="home-container-2">
        <HomeMainbar/>
        <RightSidebar/>
      </div>
    </div>

  );
}

export default Home;