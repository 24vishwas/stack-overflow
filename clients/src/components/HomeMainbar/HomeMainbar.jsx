import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {


  const location = useLocation()

  const user = 1;
  const navigate = useNavigate()
  const questionsList = useSelector(state => state.questionsReducer)
 


  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 1,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "nade js", "react js", "mongo db"],
  //   userPosted: "mano ",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kunar',
  //     answeredOn: "jan 2",
  //     useId: 2,
  //   }]


  //   //   id: 1,
  //   // votes: 3,
  //   // noOfAnswers: 2,
  //   // questionTitle: "What is a function?",
  //   // questionBody: "It meant to be",
  //   // questionTags: ["java", "node js", "react js", "mongodb"],
  //   // userPosted: "mano",
  //   // askedOn: "jan 1"

  // }, {

  //   _id: 2,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R", "python"],
  //   userPosted: "mano",
  //   askedOn: "Jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kunar',
  //     answeredOn: "jan 2",
  //     userId: 2,
  //   }]




  //   // id: 2,
  //   // votes: 0,
  //   // noOfAnswers: 1,
  //   // questionTitle: "What is a function?",
  //   // questionBody: "It meant to be",
  //   // questionTags: ["javascript", "R", "python"],
  //   // userPosted: "mano",
  //   // askedon: "jan 1"
  // }, {
  //   _id: 3,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R", "pythos"],
  //   userPosted: "ano",
  //   askedOn: "jan1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kunar',
  //     answeredOn: "jan 2",
  //     userId: 2,

  //   }]



  //   // id: 3,
  //   // votes: 1,
  //   // noOfAnswers: 2,
  //   // questionTitle: "What is a function?",
  //   // questionBody: "It meant to be",
  //   // questionTags: ["javascript", "R", "python"],
  //   // userPosted: "mano",
  //   // askedon: "Jan 1"
  // }]


  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask question")
      navigate('/Auth')
    }
    else {
      navigate('/AskQuestion')
    }

  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header' >
        {
          location.pathname === '/Home' ? <h1>Top Question</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {
          questionsList.data === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionsList.data.length} questions</p>
              <QuestionList questionsList={questionsList.data} />

            </>
        }
      </div>


    </div>
  )
}

export default HomeMainbar