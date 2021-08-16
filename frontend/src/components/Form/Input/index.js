import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { InputDiv, InputCamp, Error } from './style';

export default function Input({ name, children, ...rest }) {
    const inputRef = useRef(null);

    const [show, setShow] = useState(false);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    const { clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: (ref) => ref.current.value,
            setValue: (ref, value) => {
                ref.current.value = value;
            },
            clearValue: (ref) => {
                ref.current.value = '';
            },
        });
    }, [fieldName, registerField]);

    useEffect(() => {
        setShow(true);
    }, [error]);

    return (
        <>
            <InputDiv>
                {children[0]}
                <InputCamp
                    id={fieldName}
                    show={show}
                    onFocus={clearError}
                    ref={inputRef}
                    defaultValue={defaultValue}
                    {...rest}
                />
                {error && (
                    <Error>
                        {children[1]}
                        <span>{error}</span>
                    </Error>
                )}
            </InputDiv>
        </>
    );
}

Input.defaultProps = {
    name: '',
    children: '',
};

Input.propTypes = {
    name: PropTypes.string,
    children: PropTypes.element,
};
