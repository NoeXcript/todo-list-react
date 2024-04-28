import { useState } from "react";
import TodoItem from "./todo-item";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [text, setText] = useState("");


  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <div className="todo-controller">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addTask(text)}>+ Add task</button>
      </div>
    </div>
  );
}

export default TodoList;
