import React from 'react'
import { Card } from 'react-bootstrap'
import { cardStyle, cardTitleStyle, cardTextStyle } from '../style.js'

const Planet = ({ planet }) => {

  return (
    <Card style={cardStyle} className='my-3 py-2 px-2'>
      <Card.Body>
        <Card.Title style={cardTitleStyle} className='cTitle'>{planet.name}</Card.Title>
        <Card.Text style={cardTextStyle}>
          Population - {planet.population}<br />
          Terrain - {planet.terrain}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Planet
