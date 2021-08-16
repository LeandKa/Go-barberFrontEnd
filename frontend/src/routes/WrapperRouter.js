import React from 'react';
import Proptypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function WrapperRouter({
    component: Component,
    isPrivate = false,
    ...rest
}) {
    const signed = localStorage.getItem('token');

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    return <Route {...rest} render={(props) => <Component {...props} />} />;
}

WrapperRouter.defaultProps = {
    isPrivate: false,
};

WrapperRouter.propTypes = {
    isPrivate: Proptypes.bool,
    component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
        .isRequired,
};
