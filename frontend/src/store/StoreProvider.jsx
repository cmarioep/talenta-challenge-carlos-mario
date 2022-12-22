import { createContext } from "react";
import { useStoreHandleState } from "../hooks/";


// Crea un contexto de almacenamiento del estado
export const StoreContext = createContext();


// Proveedor de contexto del estado
export const StoreProvider = ({ children }) => {

  const { serverResponse, handleSetNewWish, handleClearWishtList, handleRemoveWish } = useStoreHandleState();


  // Proporciona el contexto para compartir data a los componentes hijo
  return (
    <StoreContext.Provider value={{ serverResponse, handleSetNewWish, handleClearWishtList, handleRemoveWish }}>
      {children}
    </StoreContext.Provider>
  )
}