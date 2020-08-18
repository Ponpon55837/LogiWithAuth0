import React from 'react'
import { Button } from 'react-bootstrap'

const Navbar = ({ setPage }) => {

  return (
    <nav>
      <Button variant="outline-primary" onClick={() => setPage('planets')}>Planets</Button>
      <Button variant="outline-primary" onClick={() => setPage('people')}>People</Button>
    </nav>
  )
}

export default Navbar
