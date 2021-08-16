import styled from 'styled-components';
import { FaClock } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    h1 {
        color: ${({ theme }) => theme.colors.gray};
    }
    hr {
        border: 1px solid ${({ theme }) => theme.colors.gray};
        opacity: 0.1;
        margin-left: 0.5rem;
        width: 80%;
    }
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin: 1rem;
`;

export const ScheduleList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ScheduleContent = styled.div`
    display: flex;
    margin-top: 1rem;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const IconClock = styled(FaClock)`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.primary};
`;
export const SpanClock = styled.span`
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.7;
`;

export const ClockContent = styled.div`
    margin-left: 1rem;
    border-radius: 5%;
    display: flex;
    width: 100%;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.appointmend};
    padding: 10px;
    img {
        border-radius: 50%;
        width: 50px;
        height: 40px;
    }
`;

export const ClockLabel = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin: 1rem;
`;
