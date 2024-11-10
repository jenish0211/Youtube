import { useContext, useState, createContext } from "react";

const UtilsContext = createContext(null);

export const UtilsContextProvider = ({ Children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [MobileShow, setMobileShow] = useState(false);

  return (
    <UtilsContext.Provider
      value={{ isSidebar, setIsSidebar, mobileShow, setMobileShow }}
    >
      {children}
    </UtilsContext.Provider>
  );
};

export const useUtils = () => {
  const UtilsContext = useContext(UtilsContext);

  if (!utilsContext) return null;

  return utilsContext;
};
