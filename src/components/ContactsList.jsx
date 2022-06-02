import React from 'react'
import ListItem from './ListItem'

const ContactsList = ({contacts, handleDelete}) => {
    return (
        <ul>
            {contacts.map((contact, index) => {
                return (
                    <ListItem contact={contact} index={index} handleDelete={handleDelete} />
                )
            })}
        </ul>
    )
}
export default ContactsList