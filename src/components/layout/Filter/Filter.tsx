import './Filter.sass'
import { ChangeEvent, useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { CategoryProps } from '../../../interfaces/GeneralProps';
import { GeneralContext } from '../../../context/GeneralContextProvider';


export function Filter() {
    const [minPrice, setMinPrice] = useState(0)
    const [filterActive, setFilterActive] = useState(false)

    const { 
        categories,
        filterByCategory,
        selectedPriceRange,
    } = useContext(GeneralContext)

    function handleFilterActive() {
        if(!filterActive)
            setFilterActive(true)
        else
            setFilterActive(false)
    }

    function handleFilterByCategory (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const categoryID = event.currentTarget.value
        filterByCategory(categoryID)
    }

    function handleSelectedPriceRange(event: ChangeEvent) {
        const input = event.currentTarget as HTMLInputElement
        const value = Number(input.value)

        if (input.id === 'minPrice') {
            setMinPrice(value)
            selectedPriceRange(value)
        } else {
            selectedPriceRange(minPrice, value)
        }
    }

    return (
        <>  
            <div className="filter p-relative">
                <button className="flex align-center justify-center open-filter" onClick={()=>{handleFilterActive()}}>
                    Filter

                    <FontAwesomeIcon icon={faFilter} size='sm' />
                </button>

                <div className={`box p-absolute ${filterActive ? 'active' : ''}`}>
                    <details className="item">
                        <summary className="flex align-center justify-space-between">
                            Categorias <FontAwesomeIcon icon={faChevronDown} size='sm' />
                        </summary>

                        <ul>
                            {categories &&
                                categories.map((category: CategoryProps) => 
                                    <li key={category.id}>
                                        <button type="button" value={category.id} onClick={(event) => handleFilterByCategory(event)}>
                                            {category.name}
                                        </button>
                                    </li>
                                ) 
                            }

                            <li className="show-all">
                                <button type="button" value="show-all" onClick={(event) => handleFilterByCategory(event)}>
                                    Mostrar tudo
                                </button>
                            </li>
                        </ul>
                    </details>

                    <details className="item">
                        <summary className="flex align-center justify-space-between">
                            Preço <FontAwesomeIcon icon={faChevronDown} size='sm' />
                        </summary>

                        <div className="prices flex">
                            <div className="flex column price">
                                <label htmlFor="minPrice">Mínimo: </label>
                                <input 
                                    type="number" 
                                    name="minPrice" 
                                    id="minPrice" 
                                    min="0" 
                                    max="10000" 
                                    placeholder="R$0" 
                                    onChange={(event) => {handleSelectedPriceRange(event)}}
                                />
                            </div>

                            <div className="flex column price">
                                <label htmlFor="maxPrice">Máximo:</label>
                                <input 
                                    type="number" 
                                    name="maxPrice" 
                                    id="maxPrice" 
                                    min="0" 
                                    max="10000" 
                                    placeholder="R$0"
                                    onChange={(event) => {handleSelectedPriceRange(event)}}
                                />
                                
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </>
    )
}