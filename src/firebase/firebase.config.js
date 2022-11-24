// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyANZabWznGl0Orc04Xr_gFuPkQbtmSnW2c",
//   authDomain: "doctor-nice-eb2bd.firebaseapp.com",
//   projectId: "doctor-nice-eb2bd",
//   storageBucket: "doctor-nice-eb2bd.appspot.com",
//   messagingSenderId: "1090170715895",
//   appId: "1:1090170715895:web:f5e892fa060c7f46295df2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;