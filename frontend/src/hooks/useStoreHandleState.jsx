import { useState } from "react";
// Realiza una solicitud fetch a la API del servidor y devuelve la respuesta en formato JSON
const fetchTexts = async () => {


    try {

        const response = await fetch('http://localhost:3500/api/wishlist');
        const texts = await response.json();
        return texts;

    } catch (error) {
        alert('Ocurrio un problema con la conexión al servidor!!!');
        console.error(error);
    }

};

// Obtiene los datos iniciales del almacenamiento
const initialStore = await fetchTexts() || [];


export const useStoreHandleState = () => {

    // Estado local que almacena los la respuesta desde el servidor para el estado inicial
    const [serverResponse, setServerResponse] = useState(initialStore);


    // Función de gestión de eventos para agregar un nuevo elemento a la lista de deseos
    const handleSetNewWish = async (newWish) => {

        try {

            const response = await fetch('http://localhost:3500/api/wishlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: newWish }),

            });

            // Actualiza el estado local con la respuesta de la solicitud fetch
            const status = response.status;

            if (status === 201) {
                const newWhishList = await fetchTexts();
                setServerResponse(newWhishList);
            }


        } catch (error) {
            alert('Ocurrio un problema con la conexión al servidor!!!');
            console.error(error);
        }

    }


    const handleClearWishtList = async () => {

        try {

            // Hacemos una solicitud DELETE a la ruta /api/texts usando fetch
            const response = await fetch('http://localhost:3500/api/wishlist', {
                method: 'DELETE',
            });


            // Actualiza el estado local con la respuesta de la solicitud fetch
            const status = response.status;

            if (status === 200) {
                const newWhishList = await fetchTexts();
                setServerResponse(newWhishList);
            }


        } catch (error) {
            alert('Ocurrio un problema con la conexión al servidor!!!');
            console.error(error);
        }


    };


    const handleRemoveWish = async (index) => {

        try {

            // Hacemos una solicitud PATCH a la ruta /api/wishlist/:index usando fetch
            const response = await fetch(`http://localhost:3500/api/wishlist/${index}`, {
                method: 'DELETE',
            });


            // Actualiza el estado local con la respuesta de la solicitud fetch
            const status = response.status;

            if (status === 200) {
                const newWhishList = await fetchTexts();
                setServerResponse(newWhishList);
            }


        } catch (error) {
            alert('Ocurrio un problema con la conexión al servidor!!!');
            console.error(error);
        }

    };


    return (
        {
            serverResponse,
            handleSetNewWish,
            handleClearWishtList,
            handleRemoveWish
        }
    )

}