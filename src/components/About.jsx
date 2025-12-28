import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const About = () => {
  const {loggedInUser} = useContext(UserContext)
  return (
    <div>
      <h1 className='text-4xl font-bold underline'>About us</h1>
      <h2>User: {loggedInUser}</h2>
    </div>
  )
}

export default About
