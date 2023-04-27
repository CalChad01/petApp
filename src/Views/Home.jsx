import { useState } from "react";
import { getImage, putImage } from "../UserService";
import nyanCat from '../Assets/nyanCat.gif';

// https://youtu.be/9hCTdUIwmhA <-- file uploading with React video

const urlImages = `https://riblnair97.execute-api.ca-central-1.amazonaws.com/dev/testingbucketforcs191/`

function Home() {

  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const handleChange = (e) => {

    // set image state to display preview image
    setImage(URL.createObjectURL(e.target.files[0]));

    // modify file with new file ID
    const tempFile = e.target.files[0];
    console.log(file);
    const tempID = Math.floor(1000000000 + Math.random() * 9000000000);

    const newFile = new File([tempFile], `${tempID}.jpg`);
    setFile(newFile);
  }

  const handleUpload = () => {

    putImage(file);

  }

  // test image:
  // `6934663841.jpg`
  const handleGetImage = () => {

    const imageFile = new File(getImage(`6934663841.jpg`), `6934663841.jpg`, {
      type: "image/jpeg",
      lastModified: Date.now()
    });

    setImage(URL.createObjectURL(imageFile));

  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange}></input>
      <button onClick={handleUpload} className="bg-slate-500 border-black border hover:scale-110  text-white">Upload</button>

      <button onClick={handleGetImage} className="bg-slate-500 border-black border hover:scale-110  text-white">Get Image</button>
      {image ? <img src={image} className="w-1/4" /> : null}
      
    </div>
  )
}

export default Home;