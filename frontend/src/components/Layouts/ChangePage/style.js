import styled from 'styled-components';

export const Container = styled.a`
    display: flex;
    text-decoration: none;
    margin-top: 40px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
        cursor: pointer;
    }

    label {
        font-size: 15px;
        margin-left: 1rem;
        &:hover {
            cursor: pointer;
        }
    }
`;
