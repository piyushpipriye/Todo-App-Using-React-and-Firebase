import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import { Button, FormControl, FormGroup ,TextField} from '@mui/material/';
import './App.css';
import db from './firebase'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [input1, setInput1] = useState('')

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data() })))
    })
  });

  const addTodo = (e) => {
    e.preventDefault()
    db.collection('todos').add({
      task: input,
      deadline: input1
    })
    setInput('')
    setInput1('')
  }
  return (
    <div className="App">
      <form>
        <FormControl>
        <FormGroup>
        <TextField
        label="Write TODO"
        value={input}
        onChange={event => setInput(event.target.value)} />
        <TextField
        type="date"
        value={input1}
        onChange={event => setInput1(event.target.value)} />
</FormGroup>
       
          <Button disabled={!input, !input1} type="submit" onClick={addTodo} variant="contained" color="primary">
            Add Todo
          </Button>
        </FormControl>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div >
  );
}

export default App;
