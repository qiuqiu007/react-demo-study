import React, { useEffect, useRef } from "react";

const Profile = () => {
  const [user, setUser] = React.useState({ name: "Alex", weight: 40 });
  const prevUser = usePrevious(user);

  React.useEffect(() => {
    prevUser &&
    user.weight > prevUser.weight &&
    console.log("You need to do exercise!");
  }, [user]);

  const gainWeight = () => {
    const newWeight = Math.random() >= 0.5 ? user.weight : user.weight + 1;
    setUser(user => ({ ...user, weight: newWeight }));
  };

  return (
    <>
    <p>Current weight: {user.weight}</p>
    <button onClick={gainWeight}>Eat burger</button>
    </>
  );
};

export default Profile;

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
