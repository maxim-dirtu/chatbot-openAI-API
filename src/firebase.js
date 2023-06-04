import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAVBOCVEbiuTrJRtEPXD7gI22N5ZmiXC6A",
  authDomain: "ubisoft-project.firebaseapp.com",
  projectId: "ubisoft-project",
  storageBucket: "ubisoft-project.appspot.com",
  messagingSenderId: "484451419628",
  appId: "1:484451419628:web:f47555be25b7ec20caecc9",
  measurementId: "G-5KF88KWXJ3"
}

const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export default app