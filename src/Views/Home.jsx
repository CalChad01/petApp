import { useState } from "react";
import { putImage, getImage } from "../../service";


// https://youtu.be/9hCTdUIwmhA <-- file uploading with React video

function Home() {

  const [file, setFile] = useState();
  const [image, setImage] = useState();

  // const handleChange = (e) => {

  //   // set image state to display preview image
  //   setImage(URL.createObjectURL(e.target.files[0]));

  //   // modify file with new file ID
  //   const tempFile = e.target.files[0];
  //   console.log(tempFile);
  //   const tempID = Math.floor(1000000000 + Math.random() * 9000000000);

  //   const newFile = new File([tempFile], `${tempID}.jpg`);
  //   setFile(newFile);
  //   console.log(newFile);
  // }

  // const handleUpload = () => {

  //   putImage(file);

  // }

  // // test file:
  // // "6817869341.jpg"
  // const handleGetImage = async () => {
  //   setImage(await getImage("6817869341.jpg"))
  // }

  return (
    <div className="h-screen w-full">
      <div className="flex-1 h-1/2 bg-doghouse bg-no-repeat bg-cover bg-center">
        <div className="flex justify-center items-center w-full h-full">
          <div className="bg-slate-50 h-fit w-fit">home page stuff</div>
        </div>
      </div>
      <div className="h-2 bg-white"></div>
      <div className=" h-16 bg-gradient-to-b from-cyan-300 to-blue-600"></div>
    </div>
  )
}

export default Home;