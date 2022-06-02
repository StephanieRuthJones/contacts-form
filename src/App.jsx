import React, { useState } from 'react'
import Greeting from './components/Greeting.jsx'
import { connect } from 'react-redux'
import * as contactAction from './actions/contactAction'
import ContactsList from './components/ContactsList.jsx'

const App = ({ createContact, deleteContact, contacts }) => {
    const [name, setName] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePhoneNumChange = (e) => {
        setPhoneNum(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !phoneNum) {
          return
        }
        const contact = {
            name,
            phoneNum
        }
        createContact(contact)
        setName('')
        setPhoneNum('')
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
                    <label>Name: </label>
                    <input type="text" onChange={handleNameChange} value={name} placeholder="First and Last Names" style={{ marginRight: "16px" }} />
                    <label>Phone Number: </label>
                    <input type="tel" onChange={handlePhoneNumChange} value={phoneNum} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="111-222-3333" style={{ marginRight: "16px" }} />

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
