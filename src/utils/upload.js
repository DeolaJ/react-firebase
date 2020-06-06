import firebase from '../firebase'

export const doUploadImage = async (dataUrl) => {
  // Get Cloud function named Upload
  var upload = firebase.functions().httpsCallable('upload');
  const data = {
    dataUrl: dataUrl
  }
  // Upload Image to Cloudinary
  return upload(JSON.stringify(data))
  .then(response => {
    const data = JSON.parse(response.data)
    // Return the Cloudinary image link
    return data.secure_url ? data.secure_url : ""
  })
  .catch((error) => { 
    // Return any error message
    return error
  })
}

export const doUploadFormImage = async (dataUrl) => {
  const data = {
    dataUrl: dataUrl
  }
  // Upload Image to Cloudinary
  return fetch('/uploadForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  .then(response => response.json())
  .then(response => {
    // Return the Cloudinary image link
    return response.secure_url ? response.secure_url : ""
  })
  .catch((error) => { 
    // Return any error message
    return error
  })
}

