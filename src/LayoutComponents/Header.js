import React from 'react'
import '../style/header.css'
import LoginButton from '../LayoutComponents/LoginButton'
import LogoutButton from '../LayoutComponents/LogoutButton'
import Profile from '../LayoutComponents/Profile'
import { useAuth0 } from '@auth0/auth0-react'
import { Navbar, Nav, Spinner } from 'react-bootstrap'

const Header = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  return (
    <Navbar variant="dark" collapseOnSelect expand="lg">
      <Navbar.Brand>React with Auth0</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-2">
          {
            isAuthenticated ?
            (isLoading && <Spinner animation="grow" variant="info" />)
            : ''
          }
        </Nav>
        <Nav className="mr-2">
          <LoginButton />
          <LogoutButton />
        </Nav>
        <Nav className="ml-2">
          <Profile />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
