import axios from 'axios'
const TOKEN = 'token'

const SET_USERS = 'SET_USERS'

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  }
}
// Note: May need a new backend route for admins to see all user data, or to modify the existing one?

//send the request only if the user is logged in
export const fetchUsers = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN)
    if (token) {
      const { data } = await axios.get('/api/users', {
        headers: {
          authorization: token,
        },
      })
      return dispatch(setUsers(data))
    }
  }
}

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.users
    default:
      return state
  }
}
