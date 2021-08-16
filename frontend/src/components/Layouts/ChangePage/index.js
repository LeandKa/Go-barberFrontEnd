import React from 'react';
import PropTypes from 'prop-types';
import { ExitIcon } from '../Icons/style';
import { Container } from './style';

export default function ChangePage({ name, url }) {
    return (
        <Container href={url}>
            <ExitIcon />
            <label>{name}</label>
        </Container>
    );
}

ChangePage.defaultProps = {
    name: '',
    url: '',
};

ChangePage.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
};
