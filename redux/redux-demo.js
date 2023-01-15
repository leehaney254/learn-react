import { createStore } from 'redux';

const counterReducer = (oldState = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: oldState.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: oldState.counter - 1,
    };
  }
  return oldState;
}

const store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });