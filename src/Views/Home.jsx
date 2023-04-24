import { useState } from "react";
import { putImages } from "../UserService";
import nyanCat from '../Assets/nyanCat.gif';

function Home() {

  const [files, setFile] = useState();

  const handleChange = (e) => {
    setFile(e.target.files);
  }

  const handleUpload = () => {

    console.log(files);

    putImages(files);

  }

  return (
    <div>
      <input type="file" onChange={handleChange}></input>
      <button onClick={handleUpload} className="bg-slate-500 border-black border hover:scale-110  text-white">Upload</button>
    </div>
  )
  
}

export default Home;