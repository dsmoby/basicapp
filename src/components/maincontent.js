import React from "react"
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
    <h1 className="content" style={styles}>
      Good {timeOfDay}{" "}
    </h1>
  )
}

export default MainContent
