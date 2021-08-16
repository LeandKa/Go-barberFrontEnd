import React, { useRef, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { CameraIcon } from '~/components/Layouts/Icons/style';
import { Label, Img, Input, CameraLabel, Div } from './style';
import api from '~/services/api';
import { Context } from '~/store';

export default function FileInput({ name, defaultValue }) {
    const inputRef = useRef(null);
    const user = useContext(Context);

    const [file, setFile] = useState(0);
    const [preview, setPreview] = useState('');

    const { fieldName, registerField } = useField(name);

    useEffect(() => {
        setFile(defaultValue.id);
        setPreview(defaultValue.url);
    }, [defaultValue]);

    async function handlePreview(e) {
        const { files } = e.target;
        const data = new FormData();
        data.append('avatar', files[0]);

        const response = await api.post('/files', data, {
            headers: {
                authorization: user.value.token,
            },
        });
        setPreview(response.data.files.url);
        setFile(response.data.files.id);
    }

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'dataset.pass',
            clearValue(ref) {
                ref.value = '';
                setPreview(null);
            },
            setValue(_, value) {
                setPreview(value);
            },
        });
    }, [fieldName, registerField]);

    return (
        <>
            <Label>
                {file !== -1 ? (
                    <Img src={preview} alt="Preview" />
                ) : (
                    <>
                        <Img
                            alt="Change-avatar"
                            src="https://w7.pngwing.com/pngs/652/849/png-transparent-computer-icons-flaticon-text-vector-icons-online-chat.png"
                        />
                    </>
                )}
            </Label>
            <Div htmlFor="avatar" className="image-upload">
                <CameraLabel htmlFor="avatar">
                    <CameraIcon />
                </CameraLabel>

                <Input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    data-pass={file}
                    onChange={handlePreview}
                    ref={inputRef}
                />
            </Div>
        </>
    );
}

FileInput.defaultProps = {
    name: '',
    defaultValue: {},
};

FileInput.propTypes = {
    name: PropTypes.string,
    defaultValue: PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
    }),
};
