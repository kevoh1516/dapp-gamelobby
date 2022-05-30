import { User } from 'firebase/auth';
import { useState, createContext } from 'react';
import { firebaseAuthProvider } from '../firebase/firebaseAuth'

interface AuthContextType {
  user: User | null;
  signin: (email: string, password: string) => Promise<void>;
  signout: () => void;
  signup: (username: string, email: string, password: string) => Promise<void>;
}

export let AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = useState<any>(null);

  let signin = (email: string, password: string) => {
    console.log("in authprovider");
    return new Promise((resolve: (value: void) => any, reject) => {
      firebaseAuthProvider.signin(email, password).then((user) => {
        setUser(user);
        resolve();
      }).catch((err) => {
        reject(err);
      });
    })
  };

  let signout = async () => {
    await firebaseAuthProvider.signout();
    setUser(null);
  };

  let signup = (username: string, email: string, password: string) => {
    return new Promise((resolve: (value: void) => any, reject) => {
      firebaseAuthProvider.signup(username, email, password).then((user) => {
        setUser(user);
        resolve();
      }).catch((err) => {
        reject(err);
      });
    })
  }

  let value = { user, signin, signout, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;