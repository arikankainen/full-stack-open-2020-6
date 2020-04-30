import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))

    dispatch(createNotification(
      `you voted '${anecdotes.content}'`)
    )
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }
  
  const byVotes = (v1, v2) => v2.votes - v1.votes

  return (
    <div>
    {anecdotes
      .filter(anecdote => 
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
      .sort(byVotes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default AnecdoteList