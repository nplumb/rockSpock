import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
//import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

export default function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

    console.info("Saga middleware implemented.");
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                createSagaMiddleware(),
                reduxImmutableStateInvariant()
            )
        ),
        +window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
