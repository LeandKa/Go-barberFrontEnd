import style from 'styled-components';
import Calendar from 'react-calendar';

export const Wrapper = style.div`
  display:flex;
  flex-direction:column;
`;

export const Container = style.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-top:1.0rem;
`;

export const DashBoard = style.div`
  display:flex;
  width:70%;
  justify-content:space-around;
  flex-direction:row;
`;

export const DashBoardContent = style.div`
   width:100%;
   display:flex;
   flex-direction:column;

   h1{
       padding:1.0rem;
       color:${({ theme }) => theme.colors.secondary};
       font-size:30px;
   }
`;

export const Span = style.div`
    font-weight:bold;
    font-size:0.9rem;
    margin-left:1.0rem;
    text-transform: capitalize; 
    color:${({ theme }) => theme.colors.primary};
   
`;

export const Calendario = style(Calendar)`
      margin-left:3.0rem;
      color:${({ theme }) => theme.colors.secondary};
      background:${({ theme }) => theme.colors.background};
      border:none;
`;
