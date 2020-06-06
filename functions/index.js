const functions = require('firebase-functions');
const cloudinary = require('cloudinary');
const admin = require('firebase-admin');

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

exports.uploadForm = functions.https.onRequest(async (req, res) => {
  try {
    // Set Cloudinary config
    cloudinary.config({ 
      cloud_name: `${functions.config().cloudinary.cloudname}`,
      api_key: `${functions.config().cloudinary.apikey}`,
      api_secret: `${functions.config().cloudinary.apisecret}`
    })
    const data = req.body;
    let timeStamp = new Date();
    timeStamp = timeStamp.toJSON();

    // Set folder for uploads
    let day = timeStamp.substring(0, 10)
    
    let promise = await cloudinary.v2.uploader.upload(data.dataUrl, {
      public_id: `${day}/sample-${timeStamp}`,
      tags: "react-firebase" // tag
    })
    return res.send(JSON.stringify(promise))
  } catch (err) {
    return res.send(JSON.stringify(err))
  }
})