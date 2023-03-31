import * as counterSagas from "./counter/saga";

// import of every [feature]/saga

const sagas = {
  ...counterSagas,
};

export default sagas;