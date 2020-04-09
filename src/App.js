import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import "./App.css";
import useInputs from './useInputs';

function countActiveUsers(users) {
  let count = users.filter(user => user.active).length;
  console.log("활성화된 사용자 처리 : " + count);
  return count;
}

const initalState = {
  users: [ {
    id: 1,
    username: "veroper",
    email: "veroper@example.com"
  },
  {
    id: 2,
    username: "veroper",
    email: "veroper@example.com"
  },
  {
    id: 3,
    username: "veroper",
    email: "veroper@example.com"
  }]
}

function reducer(state, action){
  switch(action.type){
    case 'CREATE_USER':
      return {
        inputs: initalState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id
          ? { ...user, active: !user.ative}
          :user)
      }
    case 'REMOVE_USER': 
      return {
        ...state,
        users: state.users.filter(user=> user.id !== action.id)
      }
    default: 
      throw new Error('Unhandled action');
  }
}
const App = () => {
  const nextId = useRef(4);
  const [state, dispatch] = useReducer(reducer, initalState);
  const [form, onChange, reset] = useInputs({
    username: '', 
    email: ''
  });
  const { username, email } = form;
  const { users } = state;

  const onCreate = useCallback( () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback( (id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, []);

  const onRemove = useCallback( (id) => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, []);

  const count = useMemo(() => countActiveUsers(state.users), [state.users]);

  return (
    <div className="App">
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} />
      <UserList 
        users={users}
        onToggle={onToggle}
        onRemove={onRemove} />
      <div>활성화된 사용자 수 : {count}</div>
    </div>
  );
}

export default App;


