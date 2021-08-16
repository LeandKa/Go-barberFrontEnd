import style from 'styled-components';
import { Form } from '@unform/web';
import SignIn from '../../assets/sign-in-background.png';

export const Wrapper = style.div`
  display:flex;
  flex-direction:row;
  height:100vh;
`;
export const Content = style.div`
   width:80%;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;

   img{
       width:autopx;
       height:100px;
   }

   h1{
       font-weight:bold;
       font-size:30px;
       margin-top:1.0rem;
       text-align:center;
   }

`;

export const FormWrapper = style(Form)`
display:flex;
width:50%;
flex-direction:column;
margin-top:1.0rem;
`;

export const Img = style.img`
    width:100%;
`;

export const Button = style.button`
background:${({ theme }) => theme.colors.primary};
height: 56px;
border-radius: 10px;
border: 0;
padding: 0 16px;
color: ${({ theme }) => theme.colors.lightgray};
font-weight: 500;
margin-top: 16px;
transition: background-color 0.2s;
&:hover{
    color:white;
}
`;

export const Div = style.div`
  background-image:url("${SignIn}");
  bakground-position:center;
  background-repeat:no-repeat;
  width:100%;
`;
