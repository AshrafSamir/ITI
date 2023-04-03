import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import { logger } from "../middleware/moviesMiddleware";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
