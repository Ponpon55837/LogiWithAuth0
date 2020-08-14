import React from 'react'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import { Container, Row, Col } from 'react-bootstrap'
import NotLogInPage from './ContentComponent/NotLogInPage'


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
    <NotLogInPage />
  )
}

export default App
