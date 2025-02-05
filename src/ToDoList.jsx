import React, { useState } from "react"
import "./todolist.css"
const ToDoList = () => {
  const [tasks, setTasks] = useState(["hi", "helo", "sdf"])
  const [newTask, setNewTask] = useState("")

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask])
      setNewTask("")
    } else {
      alert("Enter task !!!")
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    // setTasks(deleteTask)
  }

  function moveTaskUp(index) {}
  function moveTaskdown(index) {}

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task .."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>

              <button className="move-button" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskdown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ToDoList
