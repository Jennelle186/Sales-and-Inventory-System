import React, { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

//Firebase SDK - this is the web app's configuration which can also be found in the Firebase project under its own project settings
const firebaseConfig = {
  apiKey: "AIzaSyDgTMolUzap55DHaht9tQSJao-RWgwFlLc",
  authDomain: "trial-a098b.firebaseapp.com",
  projectId: "trial-a098b",
  storageBucket: "trial-a098b.appspot.com",
  messagingSenderId: "645259701687",
  appId: "1:645259701687:web:f391b3ff52f78bc88f0c32",
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
