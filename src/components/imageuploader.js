import React, { useState } from 'react';
import imageCompression from 'browser-image-compression'
import { doUploadImage, doUploadFormImage } from '../utils/upload'

const ImageUploader = (props) => {
  const [filename, setFilename] = useState("")
  const options = {
    maxSizeMB: 1
  }

  const handleFiles = async (file) => {
    const output = await imageCompression(file, options)
    let reader = new FileReader(output)
    reader.readAsDataURL(output)
    reader.onloadend = function () {
      setFilename(file.name)
      doUploadImage(reader.result)
    }
  }

  const handleFormFiles = async (file) => {
    const output = await imageCompression(file, options)
    let reader = new FileReader(output)
    reader.readAsDataURL(output)
    reader.onloadend = function () {
      setFilename(file.name)
      doUploadFormImage(reader.result)
    }
  }

  return (
    <form>
      <input 
        type="file" 
        id="file-upload"
        accept="image/*"  
        onChange={e => handleFiles(e.target.files[0])}
      />
      <label 
        htmlFor="file-upload" 
        arial-label="Click to upload image" 
        id="upload-label"
      >
        Upload Image
      </label>
      {
        filename &&
        <p>
          Uploaded {filename}
        </p>
      }
      <br/>
      <br/>

      <input 
        type="file" 
        id="file-upload-form"
        accept="image/*"  
        onChange={e => handleFormFiles(e.target.files[0])}
      />
      <label 
        htmlFor="file-upload-form" 
        arial-label="Click to upload image" 
        id="upload-form-label"
      >
        Upload Image - Form
      </label>
      {
        filename &&
        <p>
          Uploaded {filename}
        </p>
      }
    </form>
  )
}

export default ImageUploader