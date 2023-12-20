import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyDWAxxyk8hiKrXMcOlFwNIAfcGrJxTkWOY",
    authDomain: "roadwayridershub.firebaseapp.com",
    databaseURL: "https://roadwayridershub-default-rtdb.firebaseio.com",
    projectId: "roadwayridershub",
    storageBucket: "roadwayridershub.appspot.com",
    messagingSenderId: "781913799099",
    appId: "1:781913799099:web:80a20657b9970e583eec9e",
    measurementId: "G-TSE39YLQHD"
};

const app = initializeApp(firebaseConfig);

export default app;