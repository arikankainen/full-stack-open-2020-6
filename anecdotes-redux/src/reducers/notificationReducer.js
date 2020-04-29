const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.data
      default:
      return state
  }
}

export const createNotification = (message) => {
  return {
    type: 'SET_MESSAGE',
    data: message
  }
}

export const clearNotification = () => {
  return {
    type: 'SET_MESSAGE',
    data: null
  }
}

export default notificationReducer