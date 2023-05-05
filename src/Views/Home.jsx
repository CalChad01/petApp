import { useState } from "react";
import nyanCat from '../Assets/nyanCat.gif';

function Home() {

  const [sure, setSure] = useState(false);

  const handleTitleClick = () => {
    console.log('this was completely unnecessary...');
    setSure(state => !state);
  }

  return (
    <div className="h-screen w-screen overflow-y-hidden select-none">
      <div className="flex-1 h-4/5 bg-doghouse bg-no-repeat bg-cover bg-center">
        {
          sure ?
          <div className="flex items-center">
          <img src={nyanCat} className="w-32 animate-[fly_4s_forwards_1]"></img>
        </div> :
        null
        }
        <div className="flex justify-center items-center w-full h-full">
          <div className="text-white font-semibold text-9xl drop-shadow-[0_3.0px_2.4px_rgba(0,0,0,0.8)]">
            <button onClick={handleTitleClick}>
              HomeFurrYou
            </button>
          </div>
        </div>
      </div>
      <div className="h-2 bg-white"></div>
      <div className="h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>
    </div>
  )
}

export default Home;