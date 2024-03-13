
import './Home.sass'
import { useContext } from 'react';
import { Card } from '../Product/Card/Card';
import { Filter } from '../../layout/Filter/Filter';
import { ProductDataProps } from '../../../interfaces/GeneralProps';
import { GeneralContext } from '../../../context/GeneralContextProvider';
import { Loading } from '../../layout/loading/Loading';
import { CartUpdated } from '../../layout/CartUpdated/CartUpdated';


export function Home () {
    const { 
        loading,
        products,
    } = useContext(GeneralContext)

    
    return (
        <>
            <main className="home">
                <div className="container">
                    <div className="flex justify-flex-end">
                        <Filter />  
                    </div>

                    {!loading ? 
                        products.length ?
                            <ul className="products flex wrap ">
                                { products.map((product: ProductDataProps) => 
                                    <Card 
                                        id={product.id} 
                                        key={product.id} 
                                        title={product.title} 
                                        price={product.price} 
                                        category={product.category.name}
                                        imageUrl={product.images[0]} 
                                    />
                                ) } 
                            </ul>
                        : 

                        <div className="not-found">
                            <h1 className="for-sreader">Erro 404. Página não encontrada!</h1>
                            <h2>Produto não encontrado!</h2>
                            <p>Pesquise outro termo ou entre em contato com o nosso suporte.</p>
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