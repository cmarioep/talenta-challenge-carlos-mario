import { useContext, useEffect, useRef } from "react";
import { StoreContext } from '../store/StoreProvider';

export const useSetWishList = () => {
    
    // Este hook personalizado permite a un componente acceder a los siguientes valores del StoreContext.
    const { serverResponse, handleClearWishtList, handleRemoveWish } = useContext(StoreContext);


    // Creamos un ref para mantener una referencia a un elemento en el borde inferior.
    const bottomEdge = useRef(null);


    // Cuando cambia el valor 'serverResponse', hacemos scroll hacia el elemento de borde inferior.
    useEffect(() => {
        bottomEdge.current?.scrollIntoView();
    }, [serverResponse])


    // Devolvemos un objeto con los valores que se pueden acceder utilizando este hook personalizado
    return {
        serverResponse,
        handleClearWishtList,
        handleRemoveWish,
        bottomEdge
    };
}