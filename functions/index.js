const functions = require('firebase-functions');
const cloudinary = require('cloudinary');
const admin = require('firebase-admin');
const express = require('express');
const formData = require('express-form-data');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(formData.parse());

admin.initializeApp(functions.config().firebase);

exports.upload = functions.https.onCall(async (data, context) => {
  try {
    // Set Cloudinary config
    cloudinary.config({ 
        cloud_name: `${functions.config().cloudinary.cloudname}`,
        api_key: `${functions.config().cloudinary.apikey}`,
        api_secret: `${functions.config().cloudinary.apisecret}`
    })
    const { dataUrl } = JSON.parse(data)
    let timeStamp = new Date()
    timeStamp = timeStamp.toJSON()

    // Set folder for uploads
    let day = timeStamp.substring(0, 10)
    
    let promise = await cloudinary.v2.uploader.upload(dataUrl, {
      public_id: `${day}/sample-${timeStamp}`,
      tags: "react-firebase" // tag
    })
    return JSON.stringify(promise)
  } catch (err) {
    return JSON.stringify(err)
  }
})

exports.uploadForm = functions.https.onCall(async (data, context) => {
  try {
    // Set Cloudinary config
    cloudinary.config({ 
        cloud_name: `${functions.config().cloudinary.cloudname}`,
        api_key: `${functions.config().cloudinary.apikey}`,
        api_secret: `${functions.config().cloudinary.apisecret}`
    })
    const image = data.file
    let timeStamp = new Date()
    timeStamp = timeStamp.toJSON()

    // Set folder for uploads
    let day = timeStamp.substring(0, 10)
    
    let promise = await cloudinary.v2.uploader.upload(image.path, {
      public_id: `${day}/sample-${timeStamp}`,
      tags: "react-firebase" // tag
    })
    return JSON.stringify(promise)
  } catch (err) {
    return JSON.stringify(err)
  }
})