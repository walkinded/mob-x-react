import React from 'react';
import counter from './store/counter';
import { observer } from 'mobx-react-lite';

const Counter = observer(() => {
  return (
    <div className='counter'>
      {`Count = ${counter.count}`}
      <button className='btn' onClick={() => counter.increment()}>
        +
      </button>
      <button className='btn' onClick={() => counter.decrement()}>
        -
      </button>
    </div>
  );
});

export default Counter;
