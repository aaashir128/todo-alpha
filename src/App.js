import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import db from "./config/firebase";
import firebase from "firebase";
import Todo from "./Todo.jsx";

function App() {
  const [todos, setTodos] = useState(["breakfast", "running"]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").orderBy('timestamp', 'asc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo, id) => (
          <Todo key={id} text={todo.todo} timestamp={todo.timestamp} />
        ))}
      </ul>
    </div>
  );
}

export default App;
