import React, { useRef, useContext } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ErrorIcon, PasswordIcon } from '~/components/Layouts/Icons/style';
import { Wrapper, Content, FormWrapper, Button, Div } from './style';
import logo from '~/assets/logo.svg';
import Input from '~/components/Form/Input';
import api from '~/services/api';
import { Context } from '~/store';
import ChangePage from '~/components/Layouts/ChangePage';

export default function Reset() {
    const formRef = useRef();
    const reset = useContext(Context);
    async function onSubmit(data) {
        try {
            const schema = Yup.object({
                confirmPassword: Yup.string()
                    .required('Por favor digite uma senha valida')
                    .min(6, 'Minimo de 6 caracteres')
                    .oneOf(
                        [Yup.ref('newPassword'), null],
                        'Passwords precisam ser iguais'
                    ),
                newPassword: Yup.string()
                    .required('Por favor digite uma senha valida')
                    .min(6, 'Minimo de 6 caracteres'),
            });

            await schema.validate(data, { abortEarly: false });

            const response = await api.put(
                `/users?email=${reset.Reset.emailReset}`,
                {
                    newPassword: data.newPassword,
                }
            );

            toast.default(
                `✔️ Senha do usuario  ${response.data.name} trocada com sucesso`
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
                <h1>Digite sua nova senha</h1>
                <FormWrapper ref={formRef} onSubmit={onSubmit}>
                    <Input
                        name="newPassword"
                        type="password"
                        placeholder="Digite sua senha"
                    >
                        <PasswordIcon />
                        <ErrorIcon />
                    </Input>
                    <Input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirme a sua senha"
                    >
                        <PasswordIcon />
                        <ErrorIcon />
                    </Input>
                    <ChangePage url="/" name="Voltar para Login" />
                    <Button>Trocar</Button>
                </FormWrapper>
            </Content>
            <Div />
        </Wrapper>
    );
}
