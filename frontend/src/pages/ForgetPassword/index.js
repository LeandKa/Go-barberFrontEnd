import React, { useRef, useContext } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ErrorIcon, MailIcon } from '~/components/Layouts/Icons/style';
import { Context } from '~/store';
import { Wrapper, Content, FormWrapper, Button, Div } from './style';
import Input from '~/components/Form/Input';
import api from '../../services/api';

import logo from '~/assets/logo.svg';
import history from '~/services/history';
import ChangePage from '~/components/Layouts/ChangePage';

export default function ForgetPassword() {
    const formRef = useRef();
    const { Reset } = useContext(Context);

    async function onSubmit(data) {
        try {
            const schema = Yup.object({
                email: Yup.string()
                    .email('Digite um email valido')
                    .required('Email e obrigatorio'),
            });

            await schema.validate(data, { abortEarly: false });

            const response = await api.get(`/forget?email=${data.email}`);

            Reset.setEmailReset(response.data.email);

            history.push('/reset');
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

    return (
        <Wrapper>
            <Div />
            <Content>
                <img src={logo} alt="logo" />
                <h1>Esqueci a senha</h1>
                <FormWrapper ref={formRef} onSubmit={onSubmit}>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Digite o seu email"
                    >
                        <MailIcon />
                        <ErrorIcon />
                    </Input>
                    <Button>Acessar</Button>
                    <ChangePage url="/" name="Voltar para Login" />
                </FormWrapper>
            </Content>
        </Wrapper>
    );
}
