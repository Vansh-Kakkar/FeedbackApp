import React from 'react'
import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
import Spinner from '../shared/Spinner'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
const {feedback,isLoading} = useContext(FeedbackContext)
if(!isLoading && (!feedback || feedback.length===0)){
  return <p>No feedback yet</p>
}
else{
  return isLoading ? <Spinner /> : (<div className="feedback-list">
    {feedback.map((item)=> (
        <FeedbackItem key={item.id} item={item} />   
    ))}
</div>)
}

  

  // return (
  //   <div className="feedback-list">
        
  //       {feedback.map((item)=> (
  //         <AnimatePresence  key={item.id} >
  //           <motion.div initial = {{opacity: 0}} animate= {{opacity: 1}} exit={{opacity: 0}}>
  //           <FeedbackItem item={item} deleteFeedback={deleteFeedback}/>  
  //           </motion.div> 
  //           </AnimatePresence>
  //       ))}
        
  //   </div>
  // )
}

export default FeedbackList