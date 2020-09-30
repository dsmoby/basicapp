import React from "react"
import "./header.styles.css"
import CircleContainer from "./circles/circlecontainer"

function Header() {
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
    <header className="header">
      <CircleContainer />>
      <h1 className="message" style={styles}>
        Good {timeOfDay}{" "}
      </h1>
    </header>
  )
}

export default Header
