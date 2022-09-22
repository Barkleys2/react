import { ADD, ADD_ONE, REMOVE, REMOVE_ONE } from "../Constants/actions";

export function add1() {
    return {
        type: ADD_ONE
    }
}

export function rem1() {
    return {
        type: REMOVE_ONE
    }
}

export function add(payload) {
    return {
        type: ADD,
        payload: payload
    }
}

export function rem(payload) {
    return {
        type: REMOVE,
        payload
    }
}