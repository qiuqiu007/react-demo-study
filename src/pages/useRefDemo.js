import React, { useEffect, useRef } from 'react';

const Profile = () => {
  console.log(0);
  const [user, setUser] = React.useState({ name: 'Alex', weight: 40 });
  const prevUser = usePrevious(user);
  React.useEffect(() => {
    console.log(5) &&
      prevUser &&
      user.weight > prevUser.weight &&
      console.log('You need to do exercise!');
  }, [user]);
  console.log(3);
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
  console.log(1);
  useEffect(() => {
    ref.current = value;
    console.log(4);
  }, [value]);
  console.log(2);
  return ref.current;
}
