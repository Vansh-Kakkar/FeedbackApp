import React,{useState} from 'react'
import Card from '../shared/card'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item,deleteFeedback}) {
 
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={()=>  deleteFeedback(item.id)}>
          <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>               
    </Card>
  )
}

export default FeedbackItem