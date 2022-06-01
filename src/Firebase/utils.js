import React, { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

//Firebase SDK - this is the web app's configuration which can also be found in the Firebase project under its own project settings
const firebaseConfig = {
  apiKey: "AIzaSyDszzxIk1x2fszxDvUgJLj-3e4_bpmPUes",
  authDomain: "lines-hub.firebaseapp.com",
  projectId: "lines-hub",
  storageBucket: "lines-hub.appspot.com",
  messagingSenderId: "1024221995912",
  appId: "1:1024221995912:web:d33eae88e99cee96ec903d",
};

//Initializing Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const signInWithGoogle = new GoogleAuthProvider();
signInWithGoogle.setCustomParameters({ prompt: "select_account" });

//initializing if user is current user or not or a logged in user
export function useAuth() {
  const [isLoading, setIsLoading] = useState(true); // checking the user's status
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false); // finished checking
    });
    return unsub;
  }, []);

  return { currentUser, isLoading };
}
