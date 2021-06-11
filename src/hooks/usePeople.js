import { useState, useEffect } from "react";
import { firebase } from "../../firebase/config";
export default (removeLoading) => {
  const [peopleList, setPeopleList] = useState([]);
  const [loading, setLoading] = useState(false);
  // friendlist addFriend 2 adil data. Bvren amjsangve.
  useEffect(() => {
    setLoading(true);
    firebase
      .firestore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setPeopleList(users);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [removeLoading]);
  return [peopleList, loading];
};
