import axios from 'axios';
import React, { useContext } from 'react';
import { render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { GeneralContext, ShoppingContextProvider } from '../context/GeneralContextProvider';
import { Home } from '../components/pages/Home';
import { describe, jest, it, expect } from '@jest/globals';


jest.mock('axios');

describe('Product fetching', () => {
    it('fetches and displays products correctly', async () => {
        const mockProducts = [{ id: 1, name: 'Product 1', price: 10, imageUrl: 'url.com' }, { id: 2, name: 'Product 2', price: 20, imageUrl: 'url.com' }];

        axios.get.mockResolvedValueOnce({ data: mockProducts });

        await act(async () => {
            const { getByText } = render(
                <GeneralContext.Provider value={{}}>
                    <ShoppingContextProvider>
                        <Home />
                    </ShoppingContextProvider>
                </GeneralContext.Provider>
            );

            await waitFor(() => {
                expect(getByText('Product 1')).toBeInTheDocument();
                expect(getByText('Product 2')).toBeInTheDocument();
            });
        });
    });
});

describe('Adding product to cart', () => {
    it('adds a product to the cart', () => {
        const mockProduct = { id: 1, name: 'Product 1', price: 10 };
        const productIdToAdd = 1;

        const { result } = renderHook(() => useContext(GeneralContext));

        act(() => {
            result.current.handleProductAddedToCart(productIdToAdd);
        });

        expect(result.current.productsAddedToCart).toContainEqual(expect.objectContaining(mockProduct));
    });
});

describe('Updating quantity of a product in cart', () => {
    it('updates the quantity of a product in cart', () => {
        const productIdToUpdate = 1;
        const updatedQuantity = 3;

        const { result } = renderHook(() => useContext(GeneralContext));

        act(() => {
            result.current.handleUpdateQuantity(productIdToUpdate, updatedQuantity);
        });

        const updatedProduct = result.current.productsAddedToCart.find((product) => product.id === productIdToUpdate);

        expect(updatedProduct.quantity).toBe(updatedQuantity);
    });
});
