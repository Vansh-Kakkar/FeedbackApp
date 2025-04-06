import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback,deleteFeedback}) {
if(!feedback || feedback.length===0){
  return <p>No feedback yet</p>
}

  return (
    <div className="feedback-list">
        {feedback.map((item)=> (
            <FeedbackItem key={item.id} item={item} deleteFeedback={deleteFeedback}/>
        ))}
    </div>
  )
}

export default FeedbackList