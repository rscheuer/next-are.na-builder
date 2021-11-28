// contexts/click.js

import { createContext, useState } from 'react';

const ClickContext = createContext(0, () => {});

export const ClickProvider = ({ children }) => {
  const [clickAmount, setClickAmount] = useState(0);
  const increment = () => setClickAmount((amount) => amount + 1);
  // const updateChannel = () => setClickAmount((clickAmount) => clickAmount)

  return (
    <ClickContext.Provider value={[clickAmount, increment]}>
      {children}
    </ClickContext.Provider>
  );
};

export default ClickContext;