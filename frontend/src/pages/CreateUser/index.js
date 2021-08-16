import React, { useRef } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Wrapper, FormWrapper, Content, Button, LinkSpan, Div } from './style';
import logo from '~/assets/logo.svg';
import api from '~/services/api';
import Input from '~/components/Form/Input';
import {
    MailIcon,
    PeopleIcon,
    PasswordIcon,
    ErrorIcon,
} from '~/components/Layouts/Icons/style';

export default function CreateUser() {
    const formRef = useRef();

    async function handleSubmit(data) {
        try {
            const schema = Yup.object({
                name: Yup.string()
                    .min(3, 'Nome não pode ser menor que 3 caracteres')
                    .required('Nome e obrigatorio'),
                email: Yup.string()
                    .email('Digite um email valido')
                    .required('Email e obrigatorio'),
                password: Yup.string()
                    .min(6, 'Senha de no minimo 6 caracteres')
                    .required('Senha e obrigatoria'),
            });

            await schema.validate(data, { abortEarly: false });

            const response = await api.post('/user', {
                email: data.email,
                name: data.name,
                password: data.password,
                provider: true,
            });
            toast.default(
                `✔️ Usuario ${response.data.name} criado com sucesso`
            );
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
                <h1>Digite as suas credencias</h1>
                <FormWrapper ref={formRef} onSubmit={handleSubmit}>
                    <Input name="email" placeholder="Seu Email">
                        <MailIcon />
                        <ErrorIcon />
                    </Input>
                    <Input name="name" placeholder="Seu nome">
                        <PeopleIcon />
                        <ErrorIcon />
                    </Input>
                    <Input
                        name="password"
                        placeholder="Sua senha"
                        type="password"
                    >
                        <PasswordIcon />
                        <ErrorIcon />
                    </Input>
                    <Button>Login</Button>

                    <LinkSpan href="/">Já tem Conta?</LinkSpan>
                </FormWrapper>
            </Content>
            <Div />
        </Wrapper>
    );
}
