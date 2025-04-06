import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './Data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'


function App() {
 const[feedback,setFeedback] =useState(FeedbackData)
 
 const  deleteFeedback = (id)=> {
    if(window.confirm('Are you sure you want to delete?')){
      console.log('App',id)
      setFeedback(feedback.filter((item)=> item.id!== id))
    }
 }
  return (
    <>
    <Header />
    <div className="container">
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback}/>
   </div>
   </>
  )
}

export default App
