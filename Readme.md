<h1> Three Principles</h1>
<h2>First Principle: - </h2>
- "The global state of your application is stored as an object inside a single store"

- Maintain our application state in a single object which would be managed by the Redux store.


**Cake Shop-**

Let's assume we are tracking the number of cakes on the shelf
```
{
    numberOfCakes: 10
}
```
<h2>Second Principle </h2>
"The only way to change the state is to dispatch an action, an object that describes what
happened"

- To update the state of your app, you need to let Redux know about that with an action
Not allowed to directly update the state object

**Cake Shop-**

Scan the QR code and place an order - CAKE_ORDERED
```
{
    type: 'CAKE_ORDERED'
}
```

`CODE REPRESENTATION`
```
const orderCake = () => {
    return {
        type: 'CAKE_ORDERED',
        payload: 1
    }
}
const restockCake = (payload = 1) => {
    return {
        type: 'CAKE_RESTOCKED',
        payload
    }
}
```

<h2>Third Principle </h2>
"To specify how the state tree is updated based on actions, you write pure reducers".

- Reducer-(previousState, action) => newState

`CODE REPRESENTATION`
```
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
```

<h3>Redux Flow in React</h3>

<img src="https://www.oreilly.com/library/view/javascript-by-example/9781788293969/assets/a86830bb-53a6-463d-ad47-f58a926041a3.png" alt="Redux-flow"/>



<hr />
<h5>This Readme is inspired by this playlist</h5>
<a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3">Codevolution</a>
