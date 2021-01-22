import React, { useEffect, useRef } from 'react';

const Profile = () => {
  console.log(0);
  const [user, setUser] = React.useState({ name: 'Alex', weight: 40 });
  const prevUser = usePrevious(user);
  // console.log(user)
  // console.log(prevUser)
  React.useEffect(() => {
    console.log(5);
    prevUser && user.weight > prevUser.weight && console.log('你需要减肥啦！');
  }, [user]);
  console.log(3);
  const gainWeight = () => {
    const newWeight = Math.random() <= 0.5 ? user.weight : user.weight + 1;
    setUser(user => ({ ...user, weight: newWeight }));
  };

  return (
    <>
      <p>当前体重: {user.weight}</p>
      <button onClick={gainWeight}>吃饭</button>
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
