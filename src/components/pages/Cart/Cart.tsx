import './Cart.sass'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { GeneralContext } from '../../../context/GeneralContextProvider'

export function Cart() {
    const { 
        total,
        handleSetQuantity,
        productsAddedToCart,
        handleGetProductDescription,
        removeProductFromCart,
    } = useContext(GeneralContext)

    function handleRemoveProductFromCart (IDProductToRemove: number) {
        removeProductFromCart(IDProductToRemove)
    }
      
    return (
        <>
            <main className="cart">
                <div className="container">
                    <h5 className="title">Meu carrinho</h5>

                    { productsAddedToCart.length ?
                        <>
                            <ul className="products">
                                { productsAddedToCart.map((product) => (
                                <li className="item flex wrap justify-space-between align-center" key={product.id}>

                                    <NavLink to="/product" title="Descrição do produto" onClick={()=>{handleGetProductDescription(product.id)}} className="description">
                                        <div className="flex align-center">
                                            <img src={product.imageUrl} alt="" width={58} height={70} />
                                            <span>{product.title}</span>
                                        </div>
                                    </NavLink>

                                    <div className="price">
                                        <span>R${product.price}</span>     
                                    </div>
                    
                                    <div className="quantity flex align-center justify-center">
                                        <button 
                                            type="button" 
                                            value="removeItem" 
                                            aria-label="Remover item" 
                                            disabled={product.quantity === 1}
                                            onClick={(event) => handleSetQuantity(event, product.id, product.quantity)}
                                            className="less">
                                                <FontAwesomeIcon icon={faMinus} size="lg"></FontAwesomeIcon>
                                        </button>
                                        
                                        <span>{product.quantity} </span>
                
                                        <button 
                                            type="button" 
                                            value="addItem" 
                                            aria-label="Adicionar item"
                                            onClick={(event) => handleSetQuantity(event, product.id, product.quantity)}
                                            className="more">
                                        
                                            <FontAwesomeIcon icon={faPlus} size="lg"></FontAwesomeIcon>
                                        </button>
                                    </div>

                                    <div className="discount">
                                        <span>- R${(product.discount).toFixed(2)}</span>     
                                    </div>
                                    
                                    <button 
                                        type="button" 
                                        aria-label="Remover produto"
                                        onClick={() => handleRemoveProductFromCart (product.id)}
                                        className="trash">
                                    
                                        <FontAwesomeIcon icon={faTrashCan}  size="lg" />
                                    </button>
                                </li>
                                ))}
                            </ul>

                            <div className="total flex justify-space-between">
                                <p className="label">Total</p>
                                <p className="value">R$ {total}</p>
                            </div>
                        </>
                    :
                        <div className="not-found">
                            <h1 className="for-sreader">Erro 404. Página não encontrada!</h1>
                            <h2>Seu carrinho está vazio!</h2>
                            <p>Volte à página principal e adicione produtos para visualizar aqui.</p>
                        </div>
                    }
                    
                </div>
            </main>
        </>
    )
}