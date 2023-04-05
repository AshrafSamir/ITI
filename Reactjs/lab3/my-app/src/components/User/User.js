import React from 'react'
import classes from './User.module.css'
import Card from 'react-bootstrap/Card';


function User({name, email, age}) {
  return (
    <div className='col-md-3 m-3'>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{age}</Card.Subtitle>
        <Card.Text>
            {email}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default User;
