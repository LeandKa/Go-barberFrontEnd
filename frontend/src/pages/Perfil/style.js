import style from 'styled-components';
import { Form } from '@unform/web';

export const Container = style.div`
display:flex;
flex-direction:column;
align-content:center;
align-items:center;
`;

export const FormWrapper = style(Form)`
positon:relative;
display:flex;
flex-direction:column;
margin-top:1.0rem;
hr {
    border: 1px solid ${({ theme }) => theme.colors.gray};
    opacity: 0.1;
    margin-left: 0.5rem;
    width: 80%;
}
div{
    display:flex;
    flex-direction:row;
    gap:10px;
    justify-content:center;
}
`;

export const Img = style.img`
   border-radius:50%;
   padding:0.2rem;
   background:${({ theme }) => theme.colors.secondary};
   width:140px;
   height:140px;
   align-self:center;
`;

export const Button = style.button`
background: ${({ theme }) => theme.colors.primary};
height: 40px;
border-radius: 10px;
border: 0;
padding: 0 16px;
color: ${({ theme }) => theme.colors.lightgray};
font-weight: 500;
margin-top: 16px;
transition: opacity 0.2s;
&:hover{
    color:${({ theme }) => theme.colors.secondary};
    opacity:0.7;
}
`;

export const Link = style.a`
  text-decoration:none;
`;
