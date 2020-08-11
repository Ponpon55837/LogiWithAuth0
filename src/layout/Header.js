import React from 'react'
import '../style/header.css'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'
import Profile from '../components/Profile'
import { useAuth0 } from '@auth0/auth0-react'
import { Navbar, Nav, Spinner } from 'react-bootstrap'

const Header = () => {
  const { isLoading } = useAuth0()

  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
      <Navbar.Brand>React with Auth0</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-2">
          {isLoading ? <Spinner animation="grow" variant="info" /> : ''}
        </Nav>
        <Nav className="mr-2">
          <LoginButton />
          <LogoutButton />
        </Nav>
        <Nav className="float-right">
          <Profile />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
