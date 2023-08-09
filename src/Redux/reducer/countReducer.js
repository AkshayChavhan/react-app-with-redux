import { ADD1 ,ADD2 ,ADD ,REMOVE , REMOVE1 ,REMOVE2  } from "../actionType/actionType";

const initialState = {
    count: 0,
    count1: 100,
    count2: 1000,
    detailData: []
}

const countReducer = (state = initialState, action) => {
    if (action.type === ADD) {
        return { ...state, count: state.count + 1 };
    }
    else if (action.type === ADD1) {
        return { ...state, count1: state.count1 + 1 };
    }
    else if (action.type === ADD2) {
        return { ...state, count2: state.count2 + 1 };
    }
    else if (action.type === REMOVE) {
        return { ...state, count: state.count - 1 };
    }
    else if (action.type === REMOVE1) {
        return { ...state, count1: state.count1 - 1 };
    }
    else if (action.type === REMOVE2) {
        return { ...state, count2: state.count2 - 1 };
    }
    return state;
};

export default countReducer;