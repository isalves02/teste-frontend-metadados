import './Product.sass'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { GeneralContext } from '../../../context/GeneralContextProvider'

import { Loading } from '../../layout/loading/Loading'
import { CartUpdated } from '../../layout/CartUpdated/CartUpdated'


export function Product() {
    const { 
        loading,
        singleProduct,
        handleProductAddedToCart,
    } = useContext(GeneralContext)

    return (
        <>
            <main className="product">
                <div className="container">
                    { !loading ? 
                        singleProduct &&
                            <div className="flex align-center content">
                                <img src={singleProduct.images[0]} alt="" width={381} height={407}/>

                                <div className="info">
                                    <h3 className="title">{singleProduct.title}</h3>
                                    <h4 className="price">R$ {singleProduct.price}</h4>
                                    <p className="text">{singleProduct.description}</p>

                                    <button type="button" className="flex align-center justify-center" onClick={()=>{handleProductAddedToCart(singleProduct.id)}}>
                                        <FontAwesomeIcon icon={faBagShopping} size="xl" />
                                        Shop now
                                    </button>
                                </div>
                            </div>
                        :

                        <Loading/>
                    }
                </div>

                <CartUpdated />
            </main>
        </>
    )
}