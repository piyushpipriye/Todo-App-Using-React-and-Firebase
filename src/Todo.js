import React, { useState } from 'react'
import './Todo.css';
import { ListItem, List, ListItemText, Button, Modal } from '@mui/material/';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from './firebase'
//import { makeStyles } from '@mui/material/styles';


//const useStyles = makeStyles((theme) => ({
  // paper: {
  //   position: 'absolute',
  //   width: 400,
  //   backgroundColor: theme.palette.background.paper,
  //   border: '2px solid #000',
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
//}));

function Todo(props) {
  //const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const updatetodo = () => {
    setOpen(false);
  }
  return (
    <>
      <Modal open={open}
        onClose={e => setOpen(false)}>
         <div >{/*className={classes.paper} */}
          <h1>Modal</h1>
          <input value={input} onChange={event => setInput(event.target.value)} />
          <button onClick={e => setOpen(false)}>Update</button>
        </div>
      </Modal>
      <List className='todo_list'>
        <ListItem>
          {console.log(props.todo.todo.deadline)}
          <ListItemText primary={props.todo.todo.task} secondary="{props.todo.todo.deadline}"/>
        </ListItem>
        <Button onClick={e => setOpen(true)}>Edit</Button>
        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
      </List>
    </>
  )
}

export default Todo;