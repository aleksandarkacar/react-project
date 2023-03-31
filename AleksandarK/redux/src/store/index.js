import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import counterReducer from "./counter/slice";
import createSagaMiddleware from "@redux-saga/core";
// import { watchResetAction } from "./counter/saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), sagaMiddleware];
  },
});

// sagaMiddleware.run(watchResetAction);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

export default store;
