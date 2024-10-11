import { createContext, useState, useContext, ReactNode } from "react";

interface ActiveContextType {
  active: boolean;
  toggleActive: () => void;
}

const ActiveContext = createContext<ActiveContextType | undefined>(undefined);

interface ActiveProviderProps {
  children: ReactNode;
}

export const ActiveProvider = ({ children }: ActiveProviderProps) => {
  const [active, setActive] = useState(true);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <ActiveContext.Provider value={{ active, toggleActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

export const useActive = () => {
  const context = useContext(ActiveContext);
  if (!context) {
    throw new Error("useActive must be used within an ActiveProvider");
  }
  return context;
};
