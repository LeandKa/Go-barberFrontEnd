import styled from 'styled-components';

export const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    background: #232129;
    border-radius: 10px;
    border: ${(props) =>
        props.show ? '2px solid  #c53030' : `2px solid #ff9000`};
    color: #666360;
`;

export const InputCamp = styled.input`
    color: ${({ theme }) => theme.colors.secondary};
    height: 40px;
    width: 100%;
    background: none;
    border-radius: 10px;
    border: none;
    color: #666360;
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Error = styled.div`
    position: relative;
    display: inline-block;

    span {
        visibility: hidden;
        width: 120px;
        background-color: #c53030;
        color: white;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;

        position: absolute;
        z-index: 1;
    }

    &:hover span {
        visibility: visible;
    }
`;
