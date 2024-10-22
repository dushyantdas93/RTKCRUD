import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './feature/todo/todoSlice'
import List from './List'
const initial = { name: "", email: "" };
const App = () => {
  const [user, setUser] = useState(initial)
  const dispatch = useDispatch()

  
  const handelChange = (e) => {
    setUser({ ...user,[e.target.name]: e.target.value })
    console.log(user)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(user))
    setUser(initial)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          name='name'
          placeholder="enter your name"
          value={user.name}
          onChange={handelChange}
        />
        <input
          type="text"
          required
          name='email'
          placeholder="enter your email"
          value={user.email}
          onChange={handelChange}
        />
        <button type="submit">add</button>
      </form>

      <List />
    </div>
  );
}

export default App