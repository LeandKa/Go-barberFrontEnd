import style from 'styled-components';

export const Img = style.img`
  align-self:center;
  width:150px;
  border-radius:50%;
  background:white;
  padding:0.2rem;
  height:150px;
`;

export const Label = style.label`
  font-size:1.25rem;
  font-weight:700;
  text-align:center;
  color:black;
  display:inline-block;
`;

export const Div = style.div`
  position:relative;
  top:-30px;
  left:50px;
`;

export const CameraLabel = style.label`

padding:5px;
border-radius:40%;
`;
export const Input = style.input`
width: 0.1px;
height: 0.1px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: -1;
`;

export const Span = style.span`
  color:red;
  font-weigth:bold;
`;
