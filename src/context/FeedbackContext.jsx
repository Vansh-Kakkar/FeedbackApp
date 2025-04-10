import {createContext,useState,useEffect} from 'react'

const FeedbackContext = createContext()

export  const FeedbackProvider = ({children}) => {
     const [feedback,setFeedback] = useState([])
     const [isLoading,setIsLoading] =useState(true)
     const [feedbackEdit,setFeedbackEdit] = useState({
       item: {},
       edit: false
     })
     useEffect(()=> {
          fetchFeedbackData()
     },[])
      const fetchFeedbackData = async () => {
        const response= await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
      }
     const editFeedback = (item) =>{
        setFeedbackEdit({
          item : item,
          edit: true
        })
     }
     const  deleteFeedback = async (id)=> {
      if(window.confirm('Are you sure you want to delete?')){
        const response= await fetch (`http://localhost:5000/feedback/${id}`,{
          method : 'DELETE',
        })
         if(response.ok){
          setFeedback(feedback.filter((item) => item.id !== id))
         }else{
           console.error("Failed to delete")
         }
        // setFeedback(feedback.filter((item)=> item.id!== id))
      }
   }
   const addFeedback= async (newFeedback) => {
    const response = await fetch('http://localhost:5000/feedback',{
      method: 'POST',
      headers: {
        'Content-Type': 'appliction/json'
      },
      body: JSON.stringify(newFeedback),
    })
    const data=  await response.json()
    setFeedback([data,...feedback])
   }

    

   const updateFeedback = async (id,updItem)=> {
      const response = await fetch(`http://localhost:5000/feedback/${id}`,{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updItem)
      })
      const data= await response.json()
      setFeedback(feedback.map((item) => item.id === id ? {...item,...data} : item))
      // setFeedback(feedback.map((item) => id=== item.id ? {...item,...updItem} : item))
   }
     return (
        <FeedbackContext.Provider 
        value={{
            feedback,
            feedbackEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}
        >
          {children}
        </FeedbackContext.Provider>
     )
}

export default FeedbackContext;