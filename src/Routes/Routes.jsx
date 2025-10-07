import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root';
import Home from '../Pages/Home';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,

        children: [
            {
                index: true,
                path: '/',
                Component: Home,

            },
        ]

    },
]);



