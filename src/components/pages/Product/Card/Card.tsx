import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping';

import './Card.sass'
import { ProductCardProps } from '../../../../interfaces/GeneralProps';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../../../../context/GeneralContextProvider';


export function Card ({ id, imageUrl, title, price, category, sale }: ProductCardProps) {
    const { 
        handleProductAddedToCart,
        handleGetProductDescription,
    } = useContext(GeneralContext)


    return (
        <>
            <li className="card-product">
                <div className="p-relative">
                    {sale && <span className="sale p-absolute">Sale</span> }

                    <div className="img-box">
                        <img src={imageUrl} alt={imageUrl} width={312} height={400} />
                    </div>

                    <button 
                        type="button" 
                        value={id} 
                        className="flex align-center justify-flex-end p-absolute"
                        onClick={()=>{handleProductAddedToCart(id)}}
                        >
                        
                        <FontAwesomeIcon icon={faBagShopping} size="xl" />
                        Comprar
                    </button>
                </div>

                <NavLink to="/product" title="Descrição do produto" onClick={()=>{handleGetProductDescription(id)}}>
                    <div className="info">
                        <h6 className="title">{title}</h6>

                        <div className="flex justify-space-between">
                            <p className="category">{category}</p>
                            <span className="price">R${price}</span>
                        </div>
                    </div>
                </NavLink>
            </li>
        </>
    )
}