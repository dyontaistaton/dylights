import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/performance';
import 'firebase/firestore';
import 'firebase/analytics'

export const config={
  // <!-- Firebase App Config Goes Here 
};

firebase.initializeApp(config);
export const analytics=firebase.analytics();
export const performance=firebase.performance();
export const auth=firebase.auth();
export const firestore=firebase.firestore()

export default firebase;