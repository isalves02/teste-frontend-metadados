import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CartUpdated.sass'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { GeneralContext } from '../../../context/GeneralContextProvider'
import { useContext } from 'react'

export function CartUpdated() {

    const { 
        hasCartUpdated,
        setHasCartUpdated
    } = useContext(GeneralContext)

    if (hasCartUpdated) {
        setTimeout(() => {
            setHasCartUpdated(false)
        }, 2000)
    }

    return (
        <>
            <div className={`cart-updated p-fixed flex justify-flex-end align-center ${hasCartUpdated ? 'active' : ''}`}>
                <p>Adicionado ao carrinho</p>
                <FontAwesomeIcon icon={faCheck} size="xl" color="green" />
            </div>
        </>
    )
}