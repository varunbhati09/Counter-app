import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  ADD_COUNTER,
  REMOVE_COUNTER,
  SET_START_VALUE,
} from './actions';

const initialState = {
  counters: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload.counterId ? { ...counter, value: counter.value + 1 } : counter
        ),
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload.counterId ? { ...counter, value: counter.value - 1 } : counter
        ),
      };

    case RESET_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload.counterId ? { ...counter, value: 0 } : counter
        ),
      };

    case ADD_COUNTER:
      const newCounter = {
        id: Date.now(),
        name: action.payload.name,
        value: 0,
      };
      return {
        ...state,
        counters: [...state.counters, newCounter],
      };

    case REMOVE_COUNTER:
      return {
        ...state,
        counters: state.counters.filter((counter) => counter.id !== action.payload.counterId),
      };

    case SET_START_VALUE:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload.counterId ? { ...counter, value: action.payload.startValue } : counter
        ),
      };

    default:
      return state;
  }
};

export default counterReducer;
