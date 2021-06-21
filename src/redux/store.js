import { createStore} from 'redux';
import reducers from './reducers';

export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
