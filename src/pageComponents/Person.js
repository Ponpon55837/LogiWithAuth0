import React from 'react'
import { Card } from 'react-bootstrap'
import { cardStyle, cardTitleStyle, cardTextStyle } from '../style.js'

const Person = ({ person }) => {

  return (
    <Card style={cardStyle} className='my-3 py-2 px-2'>
      <Card.Body>
        <Card.Title style={cardTitleStyle} className='cTitle'>{person.name}</Card.Title>
        <Card.Text style={cardTextStyle}>
          Gender - {person.gender}<br />
          Birth year - {person.birth_year}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Person
