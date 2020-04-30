const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.data
      default:
      return state
  }
}

export const setNotification = (message, timeout) => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeout * 1000)

    dispatch(
      {
        type: 'SET_MESSAGE',
        data: message
      }
    )
  }
}

export const clearNotification = () => {
  return {
    type: 'SET_MESSAGE',
    data: null
  }
}

export default notificationReducer