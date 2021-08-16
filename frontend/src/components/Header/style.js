import style from 'styled-components';

export const Container = style.div`
   background:${({ theme }) => theme.colors.background};
   display:flex;
   width:100%;
   justify-content:center;
   padding:0.8rem;
   align-content:center;
`;

export const Wrapper = style.div`
  display:flex;
  width:75%;
  align-self:center;
`;

export const Logo = style.a``;

export const LogoImg = style.img`
   width:220px;
   height:80px;
   margin-right:20px;
`;

export const HeaderActions = style.div`
  width:100%;
  display:flex;
  flex-direction:row;
  padding:1.0rem;
  justify-content:space-between
`;

export const HeaderInfo = style.div`
  display:flex;
  img{
      width:55px;
      height:50px;
      margin-right:1.0rem;
      border-radius:50%;
  }
  div{
    display:flex;
    flex-direction:column;
    padding:0.5rem;
  }
`;

export const Label = style.span`
  font-family:'Roboto Slab';
  font-size:1.0rem;
  font-weight:bold;
`;

export const Name = style.a`
  font-weight:bold;
  font-size:1.0rem;
  color:${({ theme }) => theme.colors.primary};
  text-decoration:none;
`;
