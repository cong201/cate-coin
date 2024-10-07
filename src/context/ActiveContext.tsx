import { createContext, useContext, useState, ReactNode } from "react";

interface ActiveContextType {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActiveContext = createContext<ActiveContextType | undefined>(undefined);

export const ActiveProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [active, setActive] = useState(false);
  return (
    <ActiveContext.Provider value={{ active, setActive }}>
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
