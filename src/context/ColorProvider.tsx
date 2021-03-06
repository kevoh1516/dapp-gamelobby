import { createContext, useState, useContext, useMemo } from 'react';

interface ContextState {
  colors: any;
  setColors: any;
}

export const ColorContext = createContext({} as ContextState);

const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [colors, setColors] = useState({p1: '', p2: '', p3: '', p4: '', taken: {}});
  const value = useMemo(
    () => ({ colors, setColors }), 
    [colors]
  );

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
}

export default ColorProvider;