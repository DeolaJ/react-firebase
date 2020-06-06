import React, { useState } from 'react';
import imageCompression from 'browser-image-compression'
import { doUploadImage, doUploadFormImage } from '../utils/upload'

const ImageUploader = (props) => {
  const [filename, setFilename] = useState("")
  const [secondFilename, setSecondFilename] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [imageUrlForm, setImageUrlForm] = useState("")

  const options = {
    maxSizeMB: 1
  }

  const handleFiles = async (file) => {
    const output = await imageCompression(file, options)
    let reader = new FileReader(output)
    reader.readAsDataURL(output)
    reader.onloadend = async function () {
      setFilename(file.name)
      let secureUrl = await doUploadImage(reader.result)
      setImageUrl(secureUrl)
    }
  }

  const handleFormFiles = async (file) => {
    const output = await imageCompression(file, options)
    let reader = new FileReader(output)
    reader.readAsDataURL(output)
    reader.onloadend = async function () {
      setSecondFilename(file.name)
      let secureUrl = await doUploadFormImage(reader.result)
      setImageUrlForm(secureUrl)
    }
  }

  return (
    <form>
      <input 
        type="file" 
        id="file-upload"
        className="file-upload-input"
        accept="image/*"  
        onChange={e => handleFiles(e.target.files[0])}
      />
      <label 
        htmlFor="file-upload" 
        arial-label="Click to upload image" 
        id="upload-label"
        className="file-upload-label"
      >
        Upload Image
      </label>
      {
        filename &&
        <p>
          Uploaded {filename}
        </p>
      }

      {
        imageUrl &&
        <p>
          <a href={imageUrl} rel="noopener noreferrer" target="_blank">Cloudinary Link</a>
        </p>
      }
      <br/>
      <br/>

      <input 
        type="file" 
        id="file-upload-form"
        className="file-upload-input"
        accept="image/*"  
        onChange={e => handleFormFiles(e.target.files[0])}
      />
      <label 
        htmlFor="file-upload-form" 
        arial-label="Click to upload image" 
        id="upload-form-label"
        className="file-upload-label"
      >
        Upload Image - Form
      </label>
      {
        secondFilename &&
        <p>
          Uploaded {secondFilename}
        </p>
      }

      {
        imageUrlForm &&
        <p>
          <a href={imageUrlForm} rel="noopener noreferrer" target="_blank">Cloudinary Link (form)</a>
        </p>
      }
    </form>
  )
}

export default ImageUploader