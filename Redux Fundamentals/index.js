const redux = require('redux');
const createStore = redux.createStore;
/* -------------------------------------------------------------------------- */
/*                                   Action                                   */
/* -------------------------------------------------------------------------- */
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';


//*    An action that describes what happened in the application.
const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}
const restockCake = (payload = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload
    }
}
/* -------------------------------------------------------------------------- */
/*                                   Reducer                                  */
/* -------------------------------------------------------------------------- */

// (prevState, action) => newState

//*     A reducer which handles the action and decides how to update the state.

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state, // To keep track previous state
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }

        default:
            return state
    }
}
/* -------------------------------------------------------------------------- */
/*                                store                                       */
/* -------------------------------------------------------------------------- */
//*    A store that holds the state of your application.
const store = createStore(reducer);

console.log("Initial State ", store.getState());

const unsub = store.subscribe(() => console.log("Updated state ", store.getState()));

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))
store.dispatch(restockCake(3))
store.dispatch(restockCake(3))

unsub()