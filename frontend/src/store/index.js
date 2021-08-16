import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

export const Context = React.createContext({
    user: {},
    token: '',
    email: '',
});

export function Store({ children }) {
    const [user, setUser] = useState(() => {
        const local = JSON.parse(localStorage.getItem('User'));

        if (local) {
            return {
                user: local,
            };
        }
        return {};
    });
    const [emailReset, setEmailReset] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));

    const getSession = useCallback(async ({ email, password }) => {
        const response = await api.post('/session', {
            email,
            password,
        });

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('User', JSON.stringify(response.data));
        setUser({
            user: response.data,
        });
        setToken(response.data.token);

        api.defaults.headers.authorization = localStorage.getItem('token');

        history.push('/dashboard');
    }, []);

    const killSession = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        setUser({
            isLogin: false,
        });
        history.push('/');
    }, []);

    const updateSession = useCallback(async (data) => {
        if (data) {
            localStorage.setItem('User', JSON.stringify(data));
            setUser({
                user: data,
            });
        } else {
            toast.error('Algo deu errado com a solicitação');
        }
    }, []);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    const Reset = useMemo(
        () => ({ emailReset, setEmailReset }),
        [emailReset, setEmailReset]
    );

    return (
        <Context.Provider
            value={{
                value: value.user.user,
                token,
                Reset,
                getSession,
                killSession,
                updateSession,
            }}
        >
            {children}
        </Context.Provider>
    );
}

Store.propTypes = {
    children: PropTypes.element.isRequired,
};
