import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import DetailsProduct from '../Pages/DetailsProduct';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,

        children: [
            {

                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch("/Data.json"),

            },
            {
                path: '/apps',
                Component: Apps,
                loader: () => fetch("/Data.json"),
            },
            {
                path: '/installation',
                Component: Installation,
                loader: () => fetch("/Data.json"),
            },
            {
                path: '/detailsProduct/:id',
                Component: DetailsProduct,
                loader: () => fetch("/Data.json"),
            }

        ]

    },
]);



