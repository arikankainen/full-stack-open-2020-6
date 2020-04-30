import anecdoteService from '../services/anecdotes'

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(
      {
        type: 'NEW_ANECDOTE',
        data: newAnecdote
      }
    )
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(
      {
        ...anecdote,
        votes: anecdote.votes + 1
      }
    )
    
    dispatch(
      {
        type: 'VOTE_ANECDOTE',
        data: updatedAnecdote
      }
    )
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(
      {
        type: 'INIT_ANECDOTES',
        data: anecdotes
      }
    )
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE_ANECDOTE':
      const updatedAnecdote = action.data
      return state.map(
        anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
      )
    default:
      return state
  }
}

export default anecdoteReducer