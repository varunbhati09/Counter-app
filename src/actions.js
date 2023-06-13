export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const SET_START_VALUE = 'SET_START_VALUE';

export const incrementCounterAction = (counterId) => {
  return {
    type: INCREMENT_COUNTER,
    payload: {
      counterId,
    },
  };
};

export const decrementCounterAction = (counterId) => {
  return {
    type: DECREMENT_COUNTER,
    payload: {
      counterId,
    },
  };
};

export const resetCounterAction = (counterId) => {
  return {
    type: RESET_COUNTER,
    payload: {
      counterId,
    },
  };
};

export const addCounterAction = (name) => {
  return {
    type: ADD_COUNTER,
    payload: {
      name,
    },
  };
};

export const removeCounterAction = (counterId) => {
  return {
    type: REMOVE_COUNTER,
    payload: {
      counterId,
    },
  };
};

export const setStartValueAction = (counterId, startValue) => {
  return {
    type: SET_START_VALUE,
    payload: {
      counterId,
      startValue,
    },
  };
};
