
import logo   from '../../assets/icons/logo.svg'
import './Header.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { NavLink, useLocation } from 'react-router-dom';
import { ChangeEvent, useContext, useState } from 'react';
import { GeneralContext } from '../../context/GeneralContextProvider';

export function Header () {
    const [searchActive, setSearchActive] = useState(false)

    const { 
        searchInputData,
    } = useContext(GeneralContext)


    let buttonName = 'Cart'
    let dynamicLink = '/cart'
    const location = useLocation();
    
    if (location.pathname === '/cart') {
        buttonName = 'Shopping'
        dynamicLink = '/'
    }

    function handleSearchActive() {
        if(!searchActive)
            setSearchActive(true)
        else
            setSearchActive(false)
    }

    function handleSearchInput(event: ChangeEvent) {
        const input = event.currentTarget as HTMLInputElement
        searchInputData(input.value)
    }

       
    return (
        <>
            <header className="header p-fixed">
                <div className="container">
                    <div className="head flex justify-space-between align-center">
                        <div className="box-search p-relative">
                            <label htmlFor="term" className="for-sreader">Digite o que procura</label>
                            <button type="button" className="openSearch" onClick={()=>{handleSearchActive()}} >
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                            </button>
                            <input 
                                type="search" 
                                name="term" 
                                id="term" 
                                onChange={(event)=> {handleSearchInput(event)}} 
                                className={`search p-absolute ${searchActive ? 'active' : ''}`} 
                            />
                        </div>  

                        <NavLink to="/" title="Home">
                            <img src={logo} alt="Coral Shop" width={180} height={34} className="logo p-absolute" />
                        </NavLink>
                        
                        <NavLink to={dynamicLink} title="Meu carrinho">
                            <button type="button" className="openCart flex align-center">
                                <FontAwesomeIcon icon={faBagShopping} size="xl" />

                                <span>{buttonName}</span>
                                <span className="for-sreader">{buttonName}</span>
                            </button>
                        </NavLink>
                    </div>

                    <nav className="menunav">
                        <ul className='navlist flex justify-space-between'>
                            <li>Jewelry & Accessories</li>
                            <li>Clothing & Shoes</li>
                            <li>Home & Living</li>
                            <li>Wedding & Party</li>
                            <li>Toys & Entertainment</li>
                            <li>Art & Collectibles</li>
                            <li>Craft Supplies & Tools</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}