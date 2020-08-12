import React from 'react'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import { Container, Row, Col } from 'react-bootstrap'


const App = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    isAuthenticated ?
    (<Container>
      <Row>
        <Col>
          <h1>WelCome {user.given_name}</h1>
        </Col>
      </Row>
    </Container>) :
    (<Container>
      <Row>
        <Col>
          Please Log In
        </Col>
      </Row>
    </Container>)
  )
}

export default App
