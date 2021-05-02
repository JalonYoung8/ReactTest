import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDCpcG0Nk6FxC0ZHeyNoEXQhpVSKhxPYLw',
  authDomain: 'rapid-rarity-217522.firebaseapp.com',
  projectId: 'rapid-rarity-217522',
  storageBucket: 'rapid-rarity-217522.appspot.com',
  messagingSenderId: '56532931636',
  appId: '1:56532931636:web:4db33db8cc0cbe40e36661',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
