import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import HamburguerImg from '../../assets/hamburguer.svg';
import LogoBurguer from '../../assets/logoBurguer.svg';

import {
    Container,
    ContainerIntens,
    Title,
    InputName,
    InputLogin,
    LoginButon,
    CreateNewUser,
    Error
} from './styles';


const schema = yup.object({
    email: yup.string()
        .email('E-mail obrigatório!')
        .required(),
    password: yup.string()
        .required('Senha obrigatória!')
        .min(6, 'A senha deve conter no min 6 caracteres')
}).required();

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (

        <Container>

            <img src={HamburguerImg} alt="image-hamburguer" />

            <ContainerIntens>

                <img src={LogoBurguer} alt="logo-codeBurguer" />


                <Title>Faça seu Login</Title>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>

                    <InputName>Email</InputName>
                    <InputLogin type='email' {...register('email')} error={errors.email?.message} />
                    <Error>{errors.email?.message}</Error>

                    <InputName>Senha</InputName>
                    <InputLogin type='password' {...register('password')} error={errors.password?.message} />
                    <Error>{errors.password?.message}</Error>

                    <LoginButon type="submit" >Login</LoginButon>
                </form>


                <CreateNewUser >
                    Não possui conta ?

                    <a href="#"> Cadastre-se</a>
                </CreateNewUser>


            </ContainerIntens>
        </Container >

    );
}

export default Login;
