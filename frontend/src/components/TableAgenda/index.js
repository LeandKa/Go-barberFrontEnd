/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { parseISO, getHours } from 'date-fns';
import PropTypes from 'prop-types';
import {
    Container,
    ScheduleContent,
    ScheduleList,
    Span,
    IconClock,
    SpanClock,
    ClockContent,
    ClockLabel,
} from './style';

export default function TableAgenda({ Morning, Afternoon, Evening }) {
    return (
        <Container>
            <h1>Manha</h1>
            <hr />{' '}
            {Morning.length === 0 ? (
                <Span>Nenhum agendamento neste periodo</Span>
            ) : (
                ''
            )}
            {Morning.map((morning) => (
                <ScheduleList>
                    <ScheduleContent key={morning.id}>
                        <IconClock />
                        <SpanClock>
                            {getHours(parseISO(morning.data))}:00
                        </SpanClock>
                        <ClockContent>
                            <img
                                src={morning.user.avatar.url}
                                alt="avatar-clock"
                            />
                            <ClockLabel>{morning.user.name}</ClockLabel>
                        </ClockContent>
                    </ScheduleContent>
                </ScheduleList>
            ))}
            <h1>Tarde</h1>
            <hr />
            {Afternoon.length === 0 ? (
                <Span>Nenhum agendamento neste periodo</Span>
            ) : (
                ''
            )}
            {Afternoon.map((afternoon) => (
                <ScheduleList>
                    <ScheduleContent key={afternoon.id}>
                        <IconClock />
                        <SpanClock>
                            {getHours(parseISO(afternoon.data))}:00
                        </SpanClock>
                        <ClockContent>
                            <img
                                src={afternoon.user.avatar.url}
                                alt="avatar-clock"
                            />
                            <ClockLabel>{afternoon.user.name}</ClockLabel>
                        </ClockContent>
                    </ScheduleContent>
                </ScheduleList>
            ))}
            <h1>Noite</h1>
            <hr />
            {Evening.length === 0 ? (
                <Span>Nenhum agendamento neste periodo</Span>
            ) : (
                ''
            )}
            {Evening.map((evening) => (
                <ScheduleList>
                    <ScheduleContent key={evening.id}>
                        <IconClock />
                        <SpanClock>
                            {getHours(parseISO(evening.data))}:00
                        </SpanClock>
                        <ClockContent>
                            <img
                                src={evening.user.avatar.url}
                                alt="avatar-clock"
                            />
                            <ClockLabel>{evening.user.name}</ClockLabel>
                        </ClockContent>
                    </ScheduleContent>
                </ScheduleList>
            ))}
        </Container>
    );
}

TableAgenda.propTypes = {
    Morning: PropTypes.array.isRequired,
    Afternoon: PropTypes.array.isRequired,
    Evening: PropTypes.array.isRequired,
};
