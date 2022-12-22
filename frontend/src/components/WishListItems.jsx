import { useSetWishList } from '../hooks/';

import '../styles/components/WishListItmes.scss';


export const WishListItems = () => {

    const { serverResponse, bottomEdge, handleRemoveWish } = useSetWishList();


    return (

        <ul className='WishListItmes' >

            {serverResponse.map((text, index) => (
                <li
                    key={index}
                    className='WishListItmes__item'
                >
                    {text}

                    <button
                        className='WishListItmes__button'
                        onClick={() => handleRemoveWish(index)}
                    >
                        Borrar
                    </button>

                </li>
            ))}

            <div ref={bottomEdge} ></div>

        </ul>

    )

}