import styled from 'styled-components';


export const Container = styled.div`
    display: flex;

    img {
        width: auto;
        height: 100vh;
        min-width: auto;
    }

`;


export const ContainerIntens = styled.div`
    width: 100vw;
    height: 100vh;
    background: #373737;
    box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
    min-width: 100vh;


    img {
        width: 338px;
        height: 125px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px auto 50px auto;
    }

    form {
        display: flex;
        flex-direction: column;
    }


`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto 0px auto;
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 30px;

`;

export const InputName = styled.p`
    color: #FFF;
    font-size: 15px;
    font-weight: 500;
    margin-left: 23vh;  
`;

export const InputLogin = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px auto 2px auto;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
    border: ${ props => (props.error ? '2px solid #cc1717' : 'none')};
    width: 391.416px;
    height: 38.319px;
    padding-left: 10px;

`;

export const LoginButon = styled.button`
    background-color: #9758A6;
    width: 180px;
    height: 40px;
    border: none;
    border-radius: 40px;
    cursor: pointer;

    color: #EEE;
    text-align: center;
    font-family: Poppins;
    font-size: 19px;
    font-weight: 500;
    margin-left: 23vh;
    margin-top: 10px;

    &:hover {
        opacity: 0.8;    
    }

    &:active {
        opacity: 0,5;
    }
`;


export const CreateNewUser = styled.p`
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
    margin-left: 23vh;
    margin-top: 25px;

    a {
        color: #FFF;
    }

`;

export const Error = styled.p`
    margin-left: 23vh;
    font-size: 14px;
    line-height: 16px;
    color: #cc1717;
    margin-bottom: 30px;
    font-weight: 500;
`;
