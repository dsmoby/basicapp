import React from "react"
import "./contactcard.styles.css"

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.contact.imageUrl} alt="whiskar pic" />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone} </p>
      <p>Email: {props.contact.email}</p>
    </div>
  )
}

export default ContactCard
