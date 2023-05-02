// API Call Functions

import { PutObjectCommand, GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Buffer } from "buffer";

const urlPet = `https://fshjjmdf66.execute-api.ca-central-1.amazonaws.com/pets`;
const urlOwner = `https://7mc3sxy1v3.execute-api.ca-central-1.amazonaws.com/owners`;
const urlAccount = `https://pluc2254u4.execute-api.ca-central-1.amazonaws.com/accounts`;
const urlPUTImages = `https://riblnair97.execute-api.ca-central-1.amazonaws.com/dev/testingbucketforcs191/`;
const urlGETImages = `https://testingbucketforcs191.s3.ca-central-1.amazonaws.com/`;

// const s3uriExample = `s3://testingbucketforcs191/{filename}.jpg`
// const s3uriLink = https://testingbucketforcs191.s3.amazonaws.com/{filename}.jpg

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

// GET image
// still needs to be fully implemented correctly
export async function getImage(imgData) {
  const client = new S3Client({
    region: 'ca-central-1',
    credentials: {
      accessKeyId: 'AKIAY4ERSBRS6NVKSFON',
      secretAccessKey: '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',
    },

  });
  const command = new GetObjectCommand({
    Bucket: 'testingbucketforcs191',
    Key: imgData,
  });
  const url = await getSignedUrl(client, command, { expiresIn: 3600 });
  console.log(url);

  return url;

  // const response = await client.send(command);

  // const str = await response.Body.transformToString();
  // console.log(str);
  // console.log(response.Body);

  // const buffer = response.arrayBuffer();

  // const base64string = Buffer.from(buffer, 'binary').toString('base64');
  // return "data:image/jpeg;base64," + base64string;

  // const response = await fetch (`${urlGETImages + imgData}`, {
  //   method: 'GET',
  //   mode: 'cors',
  //   headers:
  //   {
  //     'Content-Type': 'image/jpeg' 
  //   },
  //   redirect: 'follow',
  // });
  // console.log(response.body);
  // const url = URL.createObjectURL(response.body);
}

// PUT image
export async function putImage(formData) {
  console.log(formData.name);
  const response = await fetch(`${urlPUTImages + formData.name}`, {
    method: 'PUT',
    body: formData,
    mode: 'cors',
    headers: 
    {
      'Content-Type': 'image/jpeg',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Credentials': true,
      // 'Access-Control-Allow-Headers': 'Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token',
    },
  });
  
  console.log(response);
}

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

