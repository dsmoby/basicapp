import React from "react"
import "./todoitem.styles.css"

function ToDoItem(props) {
  return (
    <div className="item">
      <input type="checkbox" name="" />
      <p>{props.text}</p>
    </div>
  )
}

export default ToDoItem
