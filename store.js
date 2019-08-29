import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import thunk from "redux-thunk";
import reducer from "./reducer";
//import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);

//sagaMiddleware.run(rootSaga);

export default store;
