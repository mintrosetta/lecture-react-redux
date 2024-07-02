export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const SET_COUNT = 'SET_COUNT';

export function increment() {
    return { type: INCREMENT };
}

export function decrement() {
    return { type: DECREMENT };
}

export function setCount(count) {
    return { type: SET_COUNT, payload: Number(count) };
}