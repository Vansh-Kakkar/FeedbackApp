import React from 'react'
import Card from '../shared/card'
import {Link} from 'react-router'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
      <h1>About</h1>
      <p>This is a Feedback App. Don't forget to drop your reviews.</p>

      <p>
        <Link to='/'>Back To Home</Link>
      </p>
      </div>
    </Card>
  )
}

export default AboutPage