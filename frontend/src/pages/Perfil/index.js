/* eslint-disable no-shadow */
import React, { useRef, useContext, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {
    ErrorIcon,
    MailIcon,
    PeopleIcon,
} from '~/components/Layouts/Icons/style';
import { Context } from '~/store';
import FileInput from '~/components/Form/FileInput';
import Input from '~/components/Form/Input';
import { MemorizedHeader } from '~/components/Header';
import { Container, Button, FormWrapper } from './style';
import api from '~/services/api';

export default function Perfil() {
    const formRef = useRef();
    const [avatar, setAvatar] = useState({});
    const { value, updateSession, token } = useContext(Context);

    async function handleSubmit(data) {
        try {
            const schema = Yup.object({
                avatar_id: Yup.number(),
                name: Yup.string()
                    .min(3, 'Nome não pode ser menor que 3 caracteres')
                    .required('Nome e obrigatorio'),
                email: Yup.string()
                    .email('Digite um email valido')
                    .required('Email e obrigatorio'),
            });

            await schema.validate(data, { abortEarly: false });

            const response = await api.put(`/perfil?id=${value.id}`, data, {
                headers: {
                    authorization: token,
                },
            });
            updateSession(response.data);
            toast.dark(`✔️ Editado com sucesso`);
        } catch (err) {
            if (err.response) {
                toast.error(`❌${err.response.data}`);
            }
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((e) => {
                    validationErrors[e.path] = e.message;
                });
                formRef.current.setErrors(validationErrors);
            }
        }
    }

    useEffect(() => {
        formRef.current.setData({
            name: value.name,
            email: value.email,
            password: '',
            newPassword: '',
            confirmPassword: '',
        });
        setAvatar({ url: value.avatar.url, id: value.avatar.id });
    }, []);

    return (
        <Container>
            <MemorizedHeader />
            <FormWrapper ref={formRef} onSubmit={handleSubmit}>
                <FileInput name="avatar_id" defaultValue={avatar} />

                <Input name="name" placeholder="nome">
                    <PeopleIcon />
                    <ErrorIcon />
                </Input>
                <Input name="email" placeholder="email">
                    <MailIcon />
                    <ErrorIcon />
                </Input>

                <Button type="submit">Atualize o seu perfil</Button>
                <Button>Volte para pagina anterior</Button>
            </FormWrapper>
        </Container>
    );
}
