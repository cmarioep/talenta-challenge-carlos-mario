import { WishListForm, WishListItems } from './components/';
import { useSetWishList } from './hooks';


import './styles/layout.scss';
import './styles/components/WishListForm.scss';



export const App = () => {

  const { handleClearWishtList } = useSetWishList();

  return (

    <div className="layout">

      <div className="layout__form">
        <WishListForm />
      </div>

      <div className="layout__items layout--scrolleable">

        <header className='layout__items__header'>

          <h1>Lista de Deseos</h1>

          <button
            className='WishListItmes__button'
            onClick={handleClearWishtList}
          >
            Limpiar
          </button>

        </header>

        <WishListItems />

      </div>


    </div>
  )

}