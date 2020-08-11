import React from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import './style/style.css'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUrl={window.location.origin}>
    <Header />
    <App />
  </Auth0Provider>,
  document.getElementById('root')
)
