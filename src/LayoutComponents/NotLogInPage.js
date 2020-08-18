import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { cardTitleStyle } from '../style.js'

const NotLogInPage = () => {

  return (
    <Container className='my-5'>
      <Row className='my-5'>
        <Col style={cardTitleStyle} className='my-5'>
          Please Log In
        </Col>
      </Row>
    </Container>
  )
}

export default NotLogInPage
