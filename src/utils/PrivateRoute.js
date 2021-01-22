import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {useAuth }from './../contexts/AuthContext';
import Footer from './../components/footer';
// why did he rename it with a capital C in component?
export default function PrivateRoute({ component: Component, ...rest }) {
    const {currentUser} = useAuth();
    return (
        <Route
            {...rest}
            render= {props => {
                return currentUser ? <><Component { ...props}/><Footer /></> : <Redirect to='/' />
            }

            }
        >
        </Route>
    )
}
