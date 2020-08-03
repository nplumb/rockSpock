import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
//import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "../initSagas";
//import { createLogger } from "redux-logger";

export default function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const sagaMiddleware = createSagaMiddleware();
    const middleWares = [reduxImmutableStateInvariant(), sagaMiddleware];

    // if (getQuery()["logger"]) {
    //     middleWares.push(logger);
    // }
    const composables = [applyMiddleware(...middleWares)];
    const enhancer = compose(...composables);

    console.info("Saga middleware implemented.");

    const store = createStore(
        rootReducer,
        enhancer,
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

    initSagas(sagaMiddleware);
    return store;
}
