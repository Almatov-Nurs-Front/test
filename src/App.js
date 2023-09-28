import React, { useState } from 'react';
import classes from './a.module.scss';
import cls from './style/sty.module.scss';

const App = () => {
  const [ count, setCount ] = useState(0);
  return (
    <div className={classes.main}>
      <button className={cls.main} onClick={() => setCount(prev => prev - 1)}>-</button>
      {count}
      <button className={cls.main} onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  );
};

export default App;