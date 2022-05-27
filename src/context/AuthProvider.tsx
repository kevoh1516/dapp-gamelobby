import { User } from 'firebase/auth';
import React, { createContext, useState, useContext, useMemo } from 'react';
import { firebaseAuthProvider } from './auth';

interface AuthContextType {
  user: User;
  signin: (email: string, password: string) => Promise<void>;
  signout: () => void;
  signup: (username: string, email: string, password: string) => Promise<void>;
}

export let AuthContext = React.createContext<AuthContextType>(null!);

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