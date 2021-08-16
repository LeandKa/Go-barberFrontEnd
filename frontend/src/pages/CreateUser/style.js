import style from 'styled-components';
import { IoMdExit } from 'react-icons/io';
import { Form } from '@unform/web';
import SignIn from '~/assets/sign-in-background.png';

export const Wrapper = style.div`
  display:flex;
  flex-direction:row;
  height:100vh;
`;
export const Content = style.div`
   width:50%;
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

export const InputDiv = style.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-top:1.0rem;
  background: #232129;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: #666360;
 
`;
export const IconInput = style(IoMdExit)`
    padding:0.2rem;
    font-size:30px;
`;

export const Input = style.input`
   color:white;
   height:40px;
   border-radius: 20%;
   background:${({ theme }) => theme.colors.background};
   border:none;
   &:hover{
       color:${({ theme }) => theme.colors.primary};
   }
`;

export const Img = style.img`
    width:100%;
`;
export const LinkSpan = style.a`
   font-size:16px;
   margin:1.0rem;
   text-decoration:none;
   text-align:center;
   color:${({ theme }) => theme.colors.secondary};


   &:hover{
     color:${({ theme }) => theme.colors.primary};
   }
   &:focus{
       outline:none;
   }

`;

export const Button = style.button`
background: ${({ theme }) => theme.colors.primary};
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
  
  background-size:160vh 100vh;
  width:100%;
`;
