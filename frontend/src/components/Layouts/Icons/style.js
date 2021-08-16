import styled from 'styled-components';
import {
    MdEmail,
    MdLock,
    MdPeople,
    MdExitToApp,
    MdError,
} from 'react-icons/md';
import { FaCamera, FaPowerOff } from 'react-icons/fa';

export const MailIcon = styled(MdEmail)`
    padding: 0.2rem;
    font-size: 30px;
`;

export const PasswordIcon = styled(MdLock)`
    padding: 0.2rem;
    font-size: 30px;
`;

export const PeopleIcon = styled(MdPeople)`
    padding: 0.2rem;
    font-size: 30px;
`;

export const CameraIcon = styled(FaCamera)`
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
        cursor: pointer;
    }
`;

export const ExitIconHeader = styled(FaPowerOff)`
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: 15px;
    font-size: 20px;
    transition all 0.5s ease-out;
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const ExitIcon = styled(MdExitToApp)`
    color: ${({ theme }) => theme.colors.primary};

    font-size: 20px;

    &:hover {
        cursor: pointer;
    }
`;

export const ErrorIcon = styled(MdError)`
    width: 25px;
    height: 25px;
    color: #c53030;
    &:hover {
        cursor: pointer;
    }
`;
