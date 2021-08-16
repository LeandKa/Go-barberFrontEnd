import React, { useContext, useRef } from 'react';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { Wrapper, Content, FormWrapper, Button, LinkSpan, Div } from './style';
import Input from '~/components/Form/Input';
import {
    MailIcon,
    PasswordIcon,
    ErrorIcon,
} from '~/components/Layouts/Icons/style';
import logo from '~/assets/logo.svg';
import { Context } from '~/store/index';
import ChangePage from '~/components/Layouts/ChangePage';

export default function Login() {
    const formRef = useRef();
    const { getSession } = useContext(Context);

    async function onSubmit(data) {
        try {
            const schema = Yup.object({
                avatar_id: Yup.number(),
                password: Yup.string().required('Senha e obrigatoria'),
                email: Yup.string()
                    .email('Digite um email valido')
                    .required('Email e obrigatorio'),
            });

            await schema.validate(data, { abortEarly: false });

            await getSession({ email: data.email, password: data.password });
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
            <Content>
                <img src={logo} alt="logo" />
                <h1>Bem vindo</h1>
                <FormWrapper ref={formRef} onSubmit={onSubmit}>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Digite o seu email"
                    >
                        <MailIcon />
                        <ErrorIcon />
                    </Input>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Digite a sua senha"
                    >
                        <PasswordIcon />
                        <ErrorIcon />
                    </Input>
                    <Button>Login</Button>
                    <LinkSpan href="/forget-password">
                        Esqueci a minha senha
                    </LinkSpan>
                    <ChangePage
                        url="/novo-usuario"
                        name="Novo aqui?Crie uma conta"
                    />
                </FormWrapper>
            </Content>
            <Div />
        </Wrapper>
    );
}
