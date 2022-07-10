import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../redux/actions/userAction";
import { wrapper } from "../redux/store";

const Users = ({ dateTime }) => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  const { loading, error, users } = usersList;
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  return (
    <>
      <h1>{usersList}</h1>
      {console.log(usersList, "hello")}
      {console.log(dateTime)}
    </>
  );
};

export const getStaticProps = () => {
  dispatch(loadUsers());
};

export default Users;
