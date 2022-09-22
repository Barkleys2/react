import { ADD, ADD_ONE, REMOVE, REMOVE_ONE } from "../Constants/actions";

function countReducer(state, action) {
    let stateCopy = state;

    switch (action.type) {
        case ADD_ONE:
            stateCopy++;
            break;
        case REMOVE_ONE:
            stateCopy--;
            break;
        case ADD:
            stateCopy += parseInt(action.payload);
            break;
        case REMOVE:
            stateCopy -= parseInt(action.payload);
            break;
        default:
    }


    return stateCopy;
}

export default countReducer;