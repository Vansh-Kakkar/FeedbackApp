import React,{useState,useContext,useEffect} from 'react'
import Card from '../shared/card'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const {addFeedback,id,setId,feedbackEdit,updateFeedback} = useContext(FeedbackContext)
  const [text,setText] = useState('')
  const [btnDisabled,setBtnDisabled] =useState(true)
  const [rating,setRating] =useState(10)
  const [message,setMessage] = useState('')

  useEffect(() => {
     if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
     }
  },[feedbackEdit])
  const handleTextChange = (e)=> {
      if(text === ''){
        setBtnDisabled(true)
        setMessage(null)
      }
      else if(text !== '' && text.trim().length <10){
        setBtnDisabled(true)
        setMessage('Text muste be at least 10 characters long')
      }
      else{
        setBtnDisabled(false)
        setMessage(null)
      }
      setText(e.target.value)
  }
  const handleSubmit = (e)=> {
      e.preventDefault()
      if(text.trim().length >=10){
        const newFeedback = {
            text,
            rating,
            id,
        }
       if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
       }else{
        addFeedback(newFeedback)
       }
        setId((prev) => prev + 1)
        setText('')
      }
       
  }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you like to rate our service?</h2>
             <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input type="text" placeholder='write a review' value={text} onChange={handleTextChange}/>
                
                <Button type='submit' version='secondary' isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm