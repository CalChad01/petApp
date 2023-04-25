import { useState } from "react";
import { putImage } from "../UserService";
import nyanCat from '../Assets/nyanCat.gif';

// https://youtu.be/9hCTdUIwmhA <-- file uploading with React video

function Home() {

  const [file, setFile] = useState();

  const handleChange = (e) => {
    const tempFile = e.target.files[0];
    const tempID = Math.floor(1000000000 + Math.random() * 9000000000);

    const newFile = new File([tempFile], `${tempID}.jpg`);
    setFile(newFile);
  }

  const handleUpload = () => {

    putImage(file);

  }

  return (
    <div>
      <input type="file" onChange={handleChange}></input>
      <button onClick={handleUpload} className="bg-slate-500 border-black border hover:scale-110  text-white">Upload</button>
    </div>
  )
  
}

export default Home;