import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Player = ({data}) => {
    const  {Name, Team, Nationality, Age, JerseyNumber, ImgUrl}=data
    console.log({Name})
  return (
    <div>
 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImgUrl} width={600}  height={500}/>
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text >
        <p>  Age :{Age} , {Nationality}</p> 
        <p>{Team}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 
    </div>
  )
}

export default Player