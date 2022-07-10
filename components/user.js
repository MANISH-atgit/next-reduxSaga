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
      {/* <div>
        {usersList.users ? (
          usersList.users.map((item) => <h1>{item.id}</h1>)
        ) : (
          <div>Error</div>
        )}
      </div> */}
      {console.log(usersList, "hello")}
      {console.log(dateTime)}
    </>
  );
};

// export const getServerSideProps = ReduxWrapper.getStaticProps(
//   async ({ store, req, res, ...etc }) => {
//     // regular stuff
//     store.dispatch(ApplicationSlice.actions.updateConfiguration());
//     // end the saga
//     store.dispatch(END);
//     await store.sagaTask.toPromise();
//   }
// );

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  dispatch(loadUsers());
});

export default Users;
