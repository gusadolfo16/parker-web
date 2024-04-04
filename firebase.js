import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithGoogleRedirect, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, updateDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.FIREBASE_DATABASE_URL,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENT_ID

    // temp adding this to test
    apiKey: 'AIzaSyDnNUquLvpubs0mmPOuDV1qYL-RQHHyVGE',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

// Function for uploading images to Firebase Storage
export const uploadImage = async (image, imageName) => {
  const imageRef = ref(storage, `images/${imageName}`);
  await uploadBytes(imageRef, image);
  const imageUrl = await getDownloadURL(imageRef);
  return imageUrl;
};

// Function for fetching image URLs from Firestore
export const getImages = async () => {
  const imagesRef = collection(db, "images");
  const querySnapshot = await getDocs(imagesRef);
  const images = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  return images;
};

// Function for tracking image selections (to be implemented in imageSelection.js)
export const trackSelection = async (imageId, userId, selected) => {
  const imageRef = doc(db, "images", imageId);
  await updateDoc(imageRef, { selectedUsers: selected ? [...selectedUsers, userId] : selectedUsers.filter(id => id !== userId) });
};
