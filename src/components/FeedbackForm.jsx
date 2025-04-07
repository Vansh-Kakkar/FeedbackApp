import React,{useState} from 'react'
import Card from '../shared/card'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({addFeedback}) {
  const [text,setText] = useState('')
  const [btnDisabled,setBtnDisabled] =useState(true)
  const [rating,setRating] =useState(10)
  const [message,setMessage] = useState('')

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
        }
        addFeedback(newFeedback)
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