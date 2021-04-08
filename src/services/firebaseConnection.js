import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebaseConfig = {
    apiKey: "AIzaSyCAqQn5J_nDBk2HW_6vnHzTtoPjVFDPedw",
    authDomain: "financas-4452d.firebaseapp.com",
    projectId: "financas-4452d",
    storageBucket: "financas-4452d.appspot.com",
    messagingSenderId: "712504327446",
    appId: "1:712504327446:web:6dfab469b844d5f8362437",
    measurementId: "G-NNSCYJVBE5"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;