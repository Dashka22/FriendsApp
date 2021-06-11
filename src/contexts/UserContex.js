import React, { useState } from "react";
import axios from "axios";
import { firebase } from "../../firebase/config";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [bill, setBill] = useState(0);
  const [myFriends, setMyFriends] = useState([]);
  const logout = async () => {
    setIsLoggedIn(false);
    setEmail(null);
    setUserName(null);
    setIsLoading(false);
  };

  const login = (email, password) => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("Бүртгэлгүй хэрэглэгч байна");
              return;
            }

            const user = firestoreDocument.data();

            loginUserSuccessful(user.email, user.name, user.bill, uid);
          })
          .catch((error) => {
            alert(error);
            loginFailed(error.message);
          });
      })
      .catch((error) => {
        alert(error);
        loginFailed(error.message);
      });
  };

  const signUp = (name, email, phone, password) => {
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          name: name,
          email: email,
          phone: phone,
          bill: 0,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            loginUserSuccessful(
              email,
              response.user.name,
              response.user.bill,
              uid
            );
          })
          .catch((error) => {
            alert(error);
            loginFailed(error.message);
          });
      })
      .catch((error) => {
        loginFailed(error.message);
        alert(error);
      });
  };

  const loginFailed = (error) => {
    setIsLoggedIn(false);
    setEmail(null);
    setUserName(null);
    setIsLoading(false);
  };

  const loginUserSuccessful = async (email, userName, bill, uid) => {
    setEmail(email);
    setUserName(userName);
    setBill(bill);
    setUserId(uid);
    setIsLoggedIn(true);
    setIsLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        userName,
        phone,
        signUp,
        logout,
        isLoading,
        setIsLoading,
        setPhone,
        setUserName,
        email,
        setEmail,
        userId,
        setUserId,
        myFriends,
        setMyFriends,
        setBill,
        bill,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
