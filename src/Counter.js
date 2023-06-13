import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementCounterAction,
  decrementCounterAction,
  resetCounterAction,
  addCounterAction,
  removeCounterAction,
  setStartValueAction,
} from './actions';
import './counter.css';

const Counter = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  const [counterName, setCounterName] = useState('');

  const handleIncrement = (counterId) => {
    dispatch(incrementCounterAction(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrementCounterAction(counterId));
  };

  const handleReset = (counterId) => {
    dispatch(resetCounterAction(counterId));
  };

  const handleAddCounter = () => {
    dispatch(addCounterAction(counterName || 'TallyX Counter'));
    setCounterName('');
  };

  const handleRemoveCounter = (counterId) => {
    dispatch(removeCounterAction(counterId));
  };

  const handleSetStartValue = (counterId, startValue) => {
    dispatch(setStartValueAction(counterId, startValue));
  };

  return (
    <div className="container">
      <h2>Counters</h2>
      {counters.length === 0 ? (
        <p>No counters available.</p>
      ) : (
        counters.map((counter) => (
          <div className="counter" key={counter.id}>
            <h3>{counter.name}</h3>
            <p> {counter.value}</p>
            <div className="buttons">

            <div className="buttonsOne">
            <button onClick={() => handleIncrement(counter.id)}>+</button>
              <button onClick={() => handleDecrement(counter.id)}>-</button>
              </div>
              <div className="buttonsTwo">
              <button onClick={() => handleReset(counter.id)}>↺</button>
              <button onClick={() => handleRemoveCounter(counter.id)}>✕</button>
              </div>
            </div>

            <div className='input-ButtonsThree'>
              <input 
                type="number" 
                placeholder="Set value"
                value={counter.startValue}
                onChange={(e) =>
                  handleSetStartValue(counter.id, parseInt(e.target.value))
                }
              />
            </div>

          </div>
          
          
        ))
      )}
      <div className="add-counter">
        <input
          type="text"
          placeholder="Counter Name"
          value={counterName}
          onChange={(e) => setCounterName(e.target.value)}
        />
        <button onClick={handleAddCounter}>Add Counter</button>
      </div>
    </div>
  );
};

export default Counter;
