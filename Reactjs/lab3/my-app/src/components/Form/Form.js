import React, {useState} from 'react'
import classes from './Form.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function MyForm({addUser}) {
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(e.target)
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            age: e.target.age.value
        }
        addUser(user)
     }
  return (
    <div className="d-flex justify-content-center m-4">
            <Form onSubmit={submitHandler} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="Age" placeholder="age" name="age" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

  )
}
