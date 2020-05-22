import firebase from '../firebase'

export const doUploadImage = (dataUrl) => {
  // Get Cloud function named Upload
  var upload = firebase.functions().httpsCallable('upload');
  const data = {
    dataUrl: dataUrl
  }
  // Upload Image to Cloudinary
  return upload(JSON.stringify(data))
  .then(response => {
    const data = JSON.parse(response.data)
    // Update the Cloudinary upload url
    this.setState({
      uploadUrl: data.secure_url ? data.secure_url : "",
      uploading: false
    })
  })
  .catch((error) => { 
    // Set any error message
    this.setState({
      uploading: false,
      error: error
    })
    console.log(error)
  })
}

export const doUploadFormImage = (file) => {
  // Get Cloud function named Upload
  var uploadForm = firebase.functions().httpsCallable('uploadForm');
  const formData = new FormData()
  formData.append('file', file)

  // Upload Image to Cloudinary
  return uploadForm(formData)
  .then(response => {
    const data = JSON.parse(response.data)
    // Update the Cloudinary upload url
    this.setState({
      uploadUrl: data.secure_url ? data.secure_url : "",
      uploading: false
    })
  })
  .catch((error) => { 
    // Set any error message
    this.setState({
      uploading: false,
      error: error
    })
    console.log(error)
  })
}

