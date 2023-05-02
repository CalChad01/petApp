import { useState } from "react";
import { getImage, putImage } from "../../service";

const urlImages = `https://riblnair97.execute-api.ca-central-1.amazonaws.com/dev/testingbucketforcs191/`

function Home() {

  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const handleChange = (e) => {

    // set image state to display preview image
    setImage(URL.createObjectURL(e.target.files[0]));

    // modify file with new file ID
    const tempFile = e.target.files[0];
    const tempID = Math.floor(1000000000 + Math.random() * 9000000000);

    const newFile = new File([tempFile], `${tempID}.jpg`);
    setFile(newFile);
    console.log(newFile);
  }

  const handleUpload = () => {
    putImage(file);
  }

  const handleGetImage = async () => {

    // test image:
    // `4731328905.jpg`
    setImage(await getImage(`4731328905.jpg`));

  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange}></input>
      <button onClick={handleUpload} className="bg-slate-500 border-black border hover:scale-110  text-white">Upload</button>

      <button onClick={handleGetImage} className="bg-slate-500 border-black border hover:scale-110  text-white">Get Image</button>
      {image ? <img src={image} className="w-1/2" /> : null}
    </div>
  )
}

export default Home;