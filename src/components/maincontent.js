import React from "react"
import ToDoItem from "./todoitem"
import "./maincontent.styles.css"
import ContactCard from "./contactcard"
import contactData from "../data/contactData"
import todoListData from "../data/todoListData"

function MainContent() {
  const contactComponents = contactData.map(contact => <ContactCard key={contact.id} contact={contact} />)
  const listComponents = todoListData.map(item => <ToDoItem key={item.id} text={item.text} />)

  return (
    <div className="content">
      <div className="todo-list">{listComponents}</div>
      <div className="contact-list">{contactComponents}</div>
    </div>
  )
}

export default MainContent
