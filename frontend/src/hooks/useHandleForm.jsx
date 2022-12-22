import { useState, useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';



export const useHandleForm = () => {

    // Se crea un estado para manejar los cambios en el formulario
    const [inputText, setInputText] = useState('');

    // Función de gestión para los cambios en el input text
    const onInputChange = ({ target }) => {
        setInputText(target.value);
    }


    // Este hook personalizado permite a un componente acceder al valore handleSetNewWish del StoreContext.
    const { handleSetNewWish } = useContext(StoreContext);


    const handleSubmit = async (event) => {

        // Cancela el evento por defefecto, evita que se recargue la pagina
        event.preventDefault();
        

        // valida que no se envien un elemento vacio
        if (!inputText) {
            alert('Debe ingresar un texto');
            return;
        }
     

        // Función de gestión de eventos para agregar un nuevo elemento a la lista de deseos
        handleSetNewWish(inputText);

        // Limpiamos el campo del formulario
        setInputText('');

    };


    // Devolvemos un objeto con los valores que se pueden acceder utilizando este hook personalizado
    return (
        {
            inputText,
            onInputChange,
            handleSubmit
        }
    )

}