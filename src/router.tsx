import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as productsLoader } from './views/Products'
import NewProduct, { action as newProductAction } from './views/NewProducts'
import EditProduct, { loader as editProductoLoader, action as editProductAction } from './views/EditProduct'
import { action as deleteProductAction } from './components/ProductDetail'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction,
            },
            {
                path: 'productos/:id/editar', //ROA pattern - Resource-Oriented design 
                element: <EditProduct />,
                loader: editProductoLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
]) 