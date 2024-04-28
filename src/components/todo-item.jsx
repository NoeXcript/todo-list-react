function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-item">
      <label htmlFor={task.id} className={task.completed ? "completed" : ""}>
        {task.text}
      </label>
      <input
        id={task.id}
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      <button type="submit" onClick={() => deleteTask(task.id)}>
        X
      </button>
    </div>
  );
}

export default TodoItem;
