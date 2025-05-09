import React from 'react'

function Card({children,reverse=false}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

export default Card