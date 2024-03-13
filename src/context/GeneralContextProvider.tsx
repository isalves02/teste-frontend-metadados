import { useState, createContext, useEffect, useRef } from 'react'
import { ProductAddedToCartProps, ShoppingChildrenContext, ProductsContextType, ProductDataProps, CategoryProps } from '../interfaces/GeneralProps'
import axios from 'axios'

export const GeneralContext = createContext({} as ProductsContextType)

export function ShoppingContextProvider({children}:ShoppingChildrenContext) {
	const quantity = 1;
	const [categoryID, setCategoryID] = useState('')
	const [categories, setCategories] = useState<CategoryProps[]>([])
	
	const [loading, setLoading] = useState(true)
	const [hasCartUpdated, setHasCartUpdated] = useState(false)

	const [productID, setProductID] = useState(0)
	const [products, setProducts] = useState<ProductDataProps[]>([])
	const [singleProduct, setSingleProduct] = useState<ProductDataProps>()
	
	const [searchQuery, setSearchQuery] = useState('')
	const [priceRange, setPriceRange] = useState({ min: 1, max: 10000 });
	const [productsAddedToCart, setProductsAddedToCart] = useState<ProductAddedToCartProps[]>([]) 

	
	const url = useRef('https://api.escuelajs.co/api/v1/products/');
    useEffect(() => {
		if(searchQuery)
			url.current = `https://api.escuelajs.co/api/v1/products/${searchQuery ? '?title='+searchQuery : '' }`

        const getProducts = () => {
            axios.get(url.current)
            .then(response => {
				setProducts(response.data)

            })
            .catch(error => {
                console.log('Request error: ' + error)
            })
			.finally(() => {
				setTimeout(() => {
					setLoading(false)
				}, 500)
			})
        } 

        getProducts();
    }, [searchQuery]);


	useEffect(() => {
		url.current = `https://api.escuelajs.co/api/v1/products/${productID}`

        const getProducts = () => {
            axios.get(url.current)
            .then(response => {
				setSingleProduct(response.data)
            })
            .catch(error => {
                console.log('Request error: ' + error)
            })
			.finally(() => {
				setTimeout(() => {
					setLoading(false)
				}, 500)
			})
        } 

        getProducts();
    }, [productID]);


	useEffect(() => {
		if (categoryID)
			url.current = `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryID != 'show-all' ? categoryID : ''}`

        const getProducts = () => {
            axios.get(url.current)
            .then(response => {
				setProducts(response.data)
            })
            .catch(error => {
                console.log('Request error: ' + error)
            })
			.finally(() => {
				setTimeout(() => {
					setLoading(false)
				}, 500)
			})
        } 
 
        getProducts();
    }, [categoryID]);


	useEffect(() => {
		if (priceRange)
			url.current = `https://api.escuelajs.co/api/v1/products/?price_min=${priceRange.min}&price_max=${priceRange.max}`

        const getProducts = () => {
            axios.get(url.current)
            .then(response => {
				setProducts(response.data)
            })
            .catch(error => {
                console.log('Request error: ' + error)
            })
			.finally(() => {
				setTimeout(() => {
					setLoading(false)
				}, 500)
			})
        } 

        getProducts();
    }, [priceRange]);


	useEffect(() => {
        const getCategories = () => {
            axios.get('https://api.escuelajs.co/api/v1/categories')
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => {
                console.log('Request error: ' + error)
            })
        } 

        getCategories()
    }, []);



	function handleProductAddedToCart(productID: number) {
		const isProductAlreadyAdded = productsAddedToCart.some(product => product.id === productID);
		
		if (! isProductAlreadyAdded) {
			products.map(product => {
				if(product.id === productID) {
					setProductsAddedToCart((state) => [
						...state, 
						{ 
							id: product.id,
							title: product.title,
							price: product.price,
							discount: product.price * .01,
							quantity: quantity,  
							imageUrl: product.images[0],
						},
					])
				} 
			})
		} else {
			productsAddedToCart.filter(product => {
				handleUpdateQuantity(product.id, product.quantity + quantity)
			})
		}

		setHasCartUpdated(true)
	}


	function selectedProduct (id: number) {
		setProductID(id)
		localStorage.setItem('productID', id.toString())
	}

	function selectedCategory (id: string) {
		setCategoryID(id)
	}

	function searchInputData (query: string) {
		setSearchQuery(query)
	}

	function selectedPriceRange(min?: number, max?: number) {
		if(min)
			setPriceRange({ ...priceRange, min: min });

		if(max)
			setPriceRange({ ...priceRange, max: max });
	}


	function removeProductFromCart (idProductToDelete: number) {
		const productWithoutDeletedOne = productsAddedToCart.filter(product => {
			return product.id != idProductToDelete
		})

		setProductsAddedToCart(productWithoutDeletedOne);
	}

	function handleUpdateQuantity (productID: number, quantity: number) {
		productsAddedToCart.map(product => {
			if(product.id === productID) {
				setProductsAddedToCart((state) => 
					state.map((item) =>
						item.id === product.id ? { ...item, quantity: quantity } : item
					)
				)
			}
		})
	}

	function handleSetQuantity (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number, quantity: number) {
        const button = event.currentTarget as HTMLButtonElement

        if (button.value === 'addItem') {
            handleUpdateQuantity(id, quantity + 1)
        } else {
            if (quantity > 1) {
                handleUpdateQuantity(id, quantity - 1)
            }
        }
    }

	const total = productsAddedToCart.reduce((total, product) => {
        return Math.min(total + ((product.price * product.quantity) - (product.discount * product.quantity)));
    }, 0).toFixed(2);


	return (
		<GeneralContext.Provider 
		value = {{
			total,
			products,
			productID,
			categories,
			searchQuery,

			singleProduct,
			productsAddedToCart,

			loading,
			quantity,
			hasCartUpdated,
			searchInputData,

			setHasCartUpdated,
			handleUpdateQuantity,
			removeProductFromCart,

			filterByCategory: (id: string) => selectedCategory(id),
			handleGetProductDescription: (id: number) => selectedProduct(id),
			handleProductAddedToCart: (id: number) => handleProductAddedToCart(id),
			selectedPriceRange: (min?: number, max?: number) => selectedPriceRange(min, max),
			handleSetQuantity: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number, quantity: number) => handleSetQuantity(event, id, quantity),
		}}>

		{children}
		</GeneralContext.Provider>
	)
}
