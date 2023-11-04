import React, {useReducer} from 'react';

const UseReducer = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return state + 1;
            case "reset":
                return state = 0;
            case "decrement":
                return state - 1;
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <div className={"container"}>
            <h1>Count: {count}</h1>
            <div className="btn-group">
                <button onClick={() => dispatch({type: "increment"})} className="btn btn-sm btn-success">Add</button>
                <button onClick={() => dispatch({type: "reset"})} className="btn btn-sm btn-info">Reset</button>
                <button onClick={() => dispatch({type: "decrement"})} className="btn btn-sm btn-danger">Delete
                </button>
            </div>
        </div>
    );
};

export default UseReducer;