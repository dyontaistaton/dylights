import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/performance';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/storage'

export const config={
  apiKey: "AIzaSyCxaFWKsRNAawaGDF5zVEHY0UHjYiw_d4o",
  authDomain: "baked-dylights.firebaseapp.com",
  projectId: "baked-dylights",
  storageBucket: "baked-dylights.appspot.com",
  messagingSenderId: "326132177897",
  appId: "1:326132177897:web:d375fc42fb40b1b6e14978",
  measurementId: "G-E3EDMCD8C7"
};

firebase.initializeApp(config);
export const analytics=firebase.analytics();
export const performance=firebase.performance();
export const auth=firebase.auth();
export const firestore=firebase.firestore()
export const storage=firebase.storage()

export default firebase;