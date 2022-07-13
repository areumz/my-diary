import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAK4mVf_HLnHnGhf0AE99665kryOBS8BY8",
  authDomain: "my-diary-1230d.firebaseapp.com",
  projectId: "my-diary-1230d",
  storageBucket: "my-diary-1230d.appspot.com",
  messagingSenderId: "1095903536212",
  appId: "1:1095903536212:web:1e88a2999cf31f54ae39c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 파이어베이스 초기화
const appFireStore = getFirestore(app);
// 인증 초기화
const appAuth = getAuth();

// 타임 스탬프
const timeStamp = Timestamp;

export { appFireStore, appAuth, timeStamp };
