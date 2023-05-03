// API Call Functions

import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// import 'dotenv/config.js';


// !!! MOVE THESE TO .ENV
const urlPet = `https://fshjjmdf66.execute-api.ca-central-1.amazonaws.com/pets`;
const urlOwner = `https://7mc3sxy1v3.execute-api.ca-central-1.amazonaws.com/owners`;
const urlAccount = `https://pluc2254u4.execute-api.ca-central-1.amazonaws.com/accounts`;

///////////////////////////////////////////////////////////////////////////

// GET Pet Data
export async function getPets() {
  const response = await fetch(urlPet);
  const data = await response.json();
  return data;
}

// PUT Pet Data
export async function createPet(data) {
  const response = await fetch(urlPet, {
    method: 'PUT',
    mode: 'cors',
    headers: 
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token',
    },
    body: JSON.stringify(data)
  });
  const content = await response.json()
  console.log(content);
}

///////////////////////////////////////////////////////////////////////////

// GET Owner Data
export async function getOwners() {
  const response = await fetch(urlOwner);
  const data = await response.json();
  return data;
}

// PUT Owner Data
export async function createOwner(data) {
  const response = await fetch(urlOwner, {
    method: 'PUT',
    mode: 'cors',
    headers: 
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token',
    },
    body: JSON.stringify(data)
  });
  const content = await response.json();
  console.log(content);
}

///////////////////////////////////////////////////////////////////////////

// initialize s3 client
// const client = new S3Client({
//   region: 'ca-central-1',
//   credentials: {
//     accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
//     secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
//   },
// });

// GET image
export async function getImage(imgKey) {

  const command = new GetObjectCommand({
    Bucket: 'testingbucketforcs191',
    Key: imgKey,
  });
  const url = await getSignedUrl(client, command, { expiresIn: 3600 });
  console.log(url);

  return url;
}

// PUT image
export async function putImage(imgData) {
  console.log(imgData);
  const params = {
    Bucket: 'testingbucketforcs191',
    Key: imgData.name,
    Body: imgData,
    ContentType: 'image/jpeg',
  }
  
  const command = new PutObjectCommand(params);

  client.send(command);
}

///////////////////////////////////////////////////////////////////////////

// GET lattitude and longitude
export async function getCoords(user) {
  const address = user.address;
  // Define the URL for the API request
  const urlGeoCode = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=3ce1df84633c4ee69df601f0e7251810`;

  // Make a request to the API using fetch()
  const response = await fetch(urlGeoCode);
  const data = await response.json();
  const { lat, lng } = data.results[0].geometry;

  return { lat, lng };
}

