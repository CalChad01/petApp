import React from "react";
import nyanCat from '../Assets/nyanCat.gif';

function Home() {
  return (
    <div className="flex items-center">
      <img src={nyanCat} className="w-64 animate-[fly_6s_forwards_1]"></img>
    </div>
  )
}

export default Home;