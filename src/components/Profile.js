import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'
import { Image } from 'react-bootstrap'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <div>
        <Image style={{ width: '50px', height: '50px' }} roundedCircle src={user.picture} title={user.given_name} alt={`photo by` + user.name} />
        {  console.log(<JSONPretty data={user} />) }
      </div>
    )
  )
}

export default Profile

 // { JSON.stringify(user, null, 2) }
