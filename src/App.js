import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Planets from './components/Planets'
import People from './components/People'
import NotLogInPage from './LayoutComponents/NotLogInPage'
import Header from './LayoutComponents/Header'
// import { ReactQueryDevtools } from 'react-query-devtools'
import { Container } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {
  const { user, isAuthenticated } = useAuth0()
  const [page, setPage] = useState('planets')

  return (

    <>
      <Header />
      {
        isAuthenticated ?
        (
          <div>
            <h1>Star Wars Info</h1>
            <Navbar setPage={setPage} />
              <Container className='content'>
                { page === 'planets' ? <Planets /> : <People /> }
              </Container>
          </div>
        ) :
        <NotLogInPage />
      }
      <Footer />


    </>
  )
}

export default App

// {<ReactQueryDevtools initialIsOpen={false} />}
