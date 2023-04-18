import { useState } from "react";
import { getPets, getOwners } from "../UserService";
import nyanCat from '../Assets/nyanCat.gif';

function Home() {

  // return (
  //   <div>
  //     {/* <div className="flex items-center">
  //       <img src={nyanCat} className="w-64 animate-[fly_6s_forwards_1]"></img>
  //     </div> */}
      
  //   </div>
  // )

  // image uploading test

  return (
    <div>
      <input type="file"></input>
    </div>
  )
  
}

export default Home;