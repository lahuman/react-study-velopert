import React, { useRef, useReducer, useMemo, useCallback, createContext } from "react";
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

export const UserDispatch = createContext(null);

const App = () => {
 
  const [state, dispatch] = useReducer(reducer, initalState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(state.users), [state.users]);

  return (
    <UserDispatch.Provider value={dispatch}>
    
    <div className="App">
      <CreateUser 
        />
      <UserList 
        users={users}
        />
      <div>활성화된 사용자 수 : {count}</div>
    </div>
    </UserDispatch.Provider>
  );
}

export default App;


