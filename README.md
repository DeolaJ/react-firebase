The Article - [How to create an Image Uploader using React and Cloudinary](https://medium.com/frontend-digest/how-to-create-an-image-uploader-using-react-and-cloudinary-5f07959723c4?source=your_stories_page--------------------------- "How to create an Image Uploader using React and Cloudinary").<br />
The Demo is live on [React-Firebase](https://react-firebase-19.web.app "React Firebase").<br />

This Web Application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started
    git clone https://github.com/DeolaJ/react-firebase.git
    cd react-firebase
    yarn install

### Initialise the Firebase project
    npm install -g firebase-tools
    firebase login
    firebase init

### Install Cloud function libraries
    cd react-firebase/functions
    npm install

### Cloudinary
To run this project, you need a Cloudinary account. You can sign up with Cloudinary.
Add cloudinary variables to your cloud functions by running,

#### Set Firebase Function environment variables
    firebase functions:config:set cloudinary.apikey="// your api key" cloudinary.cloudname="// your cloudname" cloudinary.apisecret="// your apisecret"

### Edit firebase environment variables
Check the /sampledotenv file, and create an .env file using that sample. <br />
Add your Firebase app config to the .env file 

## Available Scripts

### Development
    yarn start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Production build
    yarn build

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
