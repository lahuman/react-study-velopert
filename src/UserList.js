import React, { useEffect } from "react";

const User = React.memo(({ user, onRemove, onToggle }) =>{
  const { username, email, id, active } = user;
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   //clearner 함수
  //   return () => {
  //     console.log('컴포넌트가 화면에서 사라짐')
  //   }
  // }, []);
  // useEffect(() => {
  //   console.log(user);

  //   //clearner 함수
  //   return () => {

  //   }
  // }, [user]);
  return (
    <div>
      <b
        onClick={() => onToggle(id)}
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer'
        }}>{user.username}</b> <span>{user.email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users && users.map(u => 
        <User user={u} key={u.id} onRemove={onRemove} onToggle={onToggle} />)}
    </div>
    );
}

export default React.memo(UserList, (preProps, nextProps) => nextProps === preProps.users);
