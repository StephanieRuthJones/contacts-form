import React from 'react'

const ContactsList = ({contacts, handleDelete}) => {
    return (
        <ul>
            {contacts.map((contact, index) => {
                return (
                    <div key={index} style={{ display: "flex", marginBottom: "8px" }}>
                        <li style={{ marginRight: "16px" }}>{contact.name}</li>
                        <button onClick={(e) => handleDelete(e, index)}>
                            Remove
                        </button>
                    </div>
                )
            })}
        </ul>
    )
}
export default ContactsList