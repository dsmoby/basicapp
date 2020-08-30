import React from "react"
import ToDoItem from "./todoitem"
import "./maincontent.styles.css"

function MainContent() {
  const date = new Date()
  const hour = date.getTime()
  const styles = {
    fontSize: "2rem"
  }
  let timeOfDay = ""
  if (hour < 12) {
    timeOfDay = "morning"
    styles.color = "#3a4f5f"
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = "afternoon"
    styles.color = "#eaeeef"
  } else {
    timeOfDay = "night"
    styles.color = "#1a2f3f"
  }

  return (
    <div className="content">
      <h1 style={styles}>Good {timeOfDay} </h1>
      <div id="todo-list">
        <ToDoItem text="iten 1" />
        <ToDoItem text="iten 2" />
        <ToDoItem text="iten 3" />
        <ToDoItem text="iten 4" />
        <ToDoItem text="iten 5" />
      </div>
    </div>
  )
}

export default MainContent
