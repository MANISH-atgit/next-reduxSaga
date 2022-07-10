import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR } from "../types";

// export const getUsers = () => async (dispatch) => {
//   try {
//     const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
//     dispatch({
//       type: GET_USERS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: USERS_ERROR,
//       payload: error,
//     });
//   }
// };

const loadUsers = () => ({
  type: GET_USERS,
});

const setUsers = (users) => {
  console.log(users);
  return {
    type: GET_USERS_SUCCESS,
    users,
  };
};

const setError = (error) => ({
  type: GET_USERS_ERROR,
  error,
});

export { loadUsers, setUsers, setError };
