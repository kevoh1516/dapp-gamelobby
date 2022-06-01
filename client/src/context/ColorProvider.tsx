import { createContext, useState, useMemo } from 'react';

interface ContextState {
  colors: any;
  setColors: any;
  resetColors: () => void;
}

export const ColorContext = createContext({} as ContextState);

const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [colors, setColors] = useState({p1: '', p2: '', p3: '', p4: '', red: false, blue: false, green: false, yellow: false});

  const resetColors = () => {
    setColors({p1: '', p2: '', p3: '', p4: '', red: false, blue: false, green: false, yellow: false});
  }

  const value = useMemo(
    () => ({ colors, setColors, resetColors }), 
    [colors]
  );

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
}

export default ColorProvider;