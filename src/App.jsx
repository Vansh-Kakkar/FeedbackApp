import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './Data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {BrowserRouter as Router, Route, Routes} from 'react-router'
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'


function App() {
 const[feedback,setFeedback] =useState(FeedbackData)
 
 

 

 
  return (
    <>
    <FeedbackProvider>
    <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route path='/' element={
          <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </>
        }/>

        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <AboutIconLink />
   </div>
   </Router>
   </FeedbackProvider>
   </>
  )
}

export default App
