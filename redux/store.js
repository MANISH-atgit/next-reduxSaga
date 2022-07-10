// import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "@redux-saga/core";

// import rootReducer from "./reducers/index";
// import rootSaga from "./saga";

// export const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware();

//   const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(sagaMiddleware))
//   );
//   sagaMiddleware.run(rootSaga);
//   return store;
// };

// export default configureStore;

import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/index";
import rootSaga from "./saga";

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
