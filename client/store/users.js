import axios from 'axios';

const SET_USERS = 'SET_USERS';

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}
// Note: May need a new backend route for admins to see all user data, or to modify the existing one?
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/users');
      dispatch(setUsers(data));
    }
    catch (err) {
      console.log(err)
    }
  }
}

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
}
