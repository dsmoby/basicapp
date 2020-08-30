import React from "react"
import ToDoItem from "./todoitem"
import "./maincontent.styles.css"
import ContactCard from "./contactcard"

function MainContent() {
  const date = new Date()
  const hour = date.getHours()
  const styles = {
    fontSize: "2rem"
  }
  let timeOfDay = ""
  if (hour < 12) {
    timeOfDay = "morning"
    styles.color = "#eabfbf"
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = "afternoon"
    styles.color = "#eaae5f"
  } else {
    timeOfDay = "night"
    styles.color = "#1a2f3f"
  }
  console.log("time of the day: " + timeOfDay)
  console.log("hour: " + hour)

  return (
    <div className="content">
      <h1 className="message" style={styles}>
        Good {timeOfDay}{" "}
      </h1>
      <div className="todo-list" id="todo-list">
        <ToDoItem text="iten 1" />
        <ToDoItem text="iten 2" />
        <ToDoItem text="iten 3" />
        <ToDoItem text="iten 4" />
        <ToDoItem text="iten 5" />
      </div>
      <div className="contact-list">
        <ContactCard contact={{ name: "Mr. Whiskerson", imageUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }} />
        <ContactCard contact={{ name: "Fluffykins", imageUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com" }} />
        <ContactCard contact={{ name: "Destroyer", imageUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com" }} />
        <ContactCard contact={{ name: "Felix", imageUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com" }} />
      </div>
    </div>
  )
}

export default MainContent
