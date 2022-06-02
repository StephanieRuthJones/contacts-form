import React, { useState } from 'react'
import Greeting from './components/Greeting.js'
import { connect } from 'react-redux'
import * as contactAction from './actions/contactAction'
import ContactsList from './components/ContactsList.jsx'

const App = ({ createContact, deleteContact, contacts }) => {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
          return
        }
        const contact = {
            name
        }
        createContact(contact)
        setName('')
    }

    const handleDelete = (e, index) => {
        e.preventDefault()
        deleteContact(index)
    }

    return (
        <div>
            <Greeting/>
            <h1>React-Redux Contacts List Challenge</h1>
            <hr/>
            <ContactsList contacts={contacts} handleDelete={handleDelete} />
            <div>
                <h3>Add Contact</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={name} style={{ marginRight: "16px" }}/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = ({ contacts }, ownProps) => {
    return {
        contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: contact => dispatch(contactAction.createContact(contact)),
        deleteContact: index => dispatch(contactAction.deleteContact(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
