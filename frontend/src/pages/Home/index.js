import React, { useEffect, useState, useContext, useMemo } from 'react';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { Context } from '~/store';
import TableAgenda from '~/components/TableAgenda';
import './Calendar.css';
import {
    Wrapper,
    Container,
    DashBoard,
    DashBoardContent,
    Span,
    Calendario,
} from './style';
import { MemorizedHeader } from '~/components/Header';
import api from '~/services/api';

export default function Home() {
    const [value, setValue] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const user = useContext(Context);
    const { token } = useContext(Context);

    useEffect(() => {
        async function getSchedule() {
            const formt = format(value, 'yyyy-MM-dd');
            const response = await api.get(`/schedule?date=${formt}`, {
                headers: { authorization: token },
            });
            setAppointments(response.data);
            if (!response) {
                toast.error('Algo aconteceu com a sua solicitação');
            }
        }

        getSchedule();
    }, []);

    useEffect(() => {
        async function getSchedule() {
            const formt = format(value, 'yyyy-MM-dd');
            const response = await api.get(`/schedule?date=${formt}`, {
                headers: { authorization: token },
            });
            setAppointments(response.data);
            if (!response) {
                toast.error('Algo aconteceu com a sua solicitação');
            }
        }

        getSchedule();
    }, [value]);

    const onChange = (e) => {
        setValue(e);
    };

    const Evening = useMemo(
        () =>
            appointments.filter(
                (element) => parseISO(element.data).getHours() > 18
            ),
        [appointments]
    );

    const Morning = useMemo(
        () =>
            appointments.filter(
                (element) =>
                    parseISO(element.data).getHours() <= 12 &&
                    parseISO(element.data).getHours() > 8
            ),
        [appointments]
    );

    const Afternoon = useMemo(
        () =>
            appointments.filter(
                (element) =>
                    parseISO(element.data).getHours() <= 18 &&
                    parseISO(element.data).getHours() > 12
            ),
        [appointments]
    );

    return (
        <Wrapper>
            <MemorizedHeader
                name={user.value.name}
                image={user.value.avatar.url}
            />
            <Container>
                <DashBoard>
                    <DashBoardContent>
                        <h1>Horários agendadados</h1>
                        <Span>
                            Dia{' '}
                            {format(value, `dd`, {
                                locale: pt,
                            })}{' '}
                            de{' '}
                            {format(value, `LLLL`, {
                                locale: pt,
                            })}
                            |
                            {format(value, ` eeee`, {
                                locale: pt,
                            })}
                        </Span>
                        <TableAgenda
                            Morning={Morning}
                            Afternoon={Afternoon}
                            Evening={Evening}
                        />
                    </DashBoardContent>
                    <DashBoardContent>
                        <Calendario onChange={onChange} value={value} />
                    </DashBoardContent>
                </DashBoard>
            </Container>
        </Wrapper>
    );
}
