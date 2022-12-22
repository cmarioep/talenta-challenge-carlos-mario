import { useHandleForm } from '../hooks/';


export const WishListForm = () => {

    const { inputText, onInputChange, handleSubmit } = useHandleForm();


    return (

        <form className='wishListForm' onSubmit={handleSubmit}>

            <label>
                <span className='wishListForm__labeltext'>¿Tienes un nuevo Deseo?</span>


                <input
                    className='wishListForm__input'
                    type="text"
                    placeholder="Escriba un nuevo deseo"
                    value={inputText}
                    onChange={onInputChange}
                />

            </label>

            <button
                className='wishListForm__button'
                type="submit"
            >
                Nuevo
            </button>

        </form>

    )

}