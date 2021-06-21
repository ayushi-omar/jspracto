import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { presistMiddleware } from "./middlewares/presist-middleware";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(presistMiddleware, thunk)
);

//testing
// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: "code",
//   },
// });
// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: "text",
//   },
// });
// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: "code",
//   },
// });
// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: "text",
//   },
// });
