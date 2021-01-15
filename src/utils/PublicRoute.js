import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth }from './../contexts/AuthContext';
// why did he rename it with a capital C in component?
export default function PublicRoute({ component: Component, ...rest }) {
    const {currentUser} = useAuth();
    return (
        <Route
            {...rest}
            render= {props => {
                return !currentUser ? <Component { ...props}/> : <Redirect to='/account' />
            }

            }
        >
        </Route>
    )
}
