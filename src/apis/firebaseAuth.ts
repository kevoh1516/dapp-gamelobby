import { User } from 'firebase/auth';
import { 
  createUserWithEmailAndPassword, 
  updateProfile, 
  UserCredential, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const firebaseAuthProvider = {

  isAuthenticated: false,

  signin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
          // Signed in 
          firebaseAuthProvider.isAuthenticated = true;
          const user = userCredential.user;
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },

  signout() {
    firebaseAuthProvider.isAuthenticated = false;
    return auth.signOut();
  },

  signup(username: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
          // Signed in 
          firebaseAuthProvider.isAuthenticated = true;
          const user = userCredential.user;
          updateProfile(auth.currentUser!, {
            displayName: username, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            resolve(user);
          }).catch((error) => {
            reject(error);
          });
        })
        .catch((error) => {
          reject(error);
        });
    })
  }
  
};

export const setProfilePicture = async (user: User, photoURL: string | null) => {
  updateProfile(user, { photoURL: photoURL});
}