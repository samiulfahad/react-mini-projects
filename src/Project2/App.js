import { useState } from 'react';
import Form from './Form';
import List from './List';

const App = () => {
  const [users, addUser] = useState([])
  const add = (name, age) => {
    addUser(oldList => [...oldList, { name, age, id: Math.random().toString() }])
  }
  
  return (
    <>
      <Form add={add} />
      <List users={users} />
    </>
  );
}

export default App;
