import {createContext,useState} from 'react'

const FeedbackContext = createContext()

export  const FeedbackProvider = ({children}) => {
     const [feedback,setFeedback] = useState([
        {
            id: 1,
            text: 'This is item 1',
            rating: 10,
        },
        {
          id: 2,
          text: 'This is item 2',
          rating: 8,
        },
        {
          id: 3,
          text: 'This is item 3',
          rating: 7,
        }
     ])
     const [feedbackEdit,setFeedbackEdit] = useState({
       item: {},
       edit: false
     })
     const editFeedback = (item) =>{
        setFeedbackEdit({
          item : item,
          edit: true
        })
     }
     const  deleteFeedback = (id)=> {
      if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter((item)=> item.id!== id))
      }
   }
   const addFeedback= (newFeedback) => {
    setFeedback([newFeedback,...feedback])
   }

   const updateFeedback = (id,updItem)=> {
      setFeedback(feedback.map((item) => id=== item.id ? {...item,...updItem} : item))
   }
    const [id,setId] = useState(4)
     return (
        <FeedbackContext.Provider 
        value={{
            feedback,
            id,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            setId,
            editFeedback,
            updateFeedback
        }}
        >
          {children}
        </FeedbackContext.Provider>
     )
}

export default FeedbackContext;