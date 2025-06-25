import React from 'react'
import {useContext,useState} from 'react'
import UserContext from '../context/UserContext'
function Profile() {

    const {user} = useContext(UserContext)
      if(!user) return <div className="">Please Login</div>
      return <div className="">Welcome {user.username}</div>
}

export default Profile
