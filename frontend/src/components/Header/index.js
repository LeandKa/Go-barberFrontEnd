import React, { useContext } from 'react';
import { Context } from '~/store';
import { ExitIconHeader } from '../Layouts/Icons/style';
import {
    Container,
    Wrapper,
    Logo,
    LogoImg,
    HeaderActions,
    HeaderInfo,
    Label,
    Name,
} from './style';
import LogoSvg from '~/assets/logo.svg';

export function Header() {
    const { killSession, value } = useContext(Context);

    const handleLogout = () => {
        killSession();
    };

    return (
        <Container>
            <Wrapper>
                <Logo href="/dashboard">
                    <LogoImg src={LogoSvg} />
                </Logo>
                <HeaderActions>
                    <HeaderInfo>
                        <img src={value.avatar.url} alt="avatar" />
                        <div>
                            <Label>Bem vindo,</Label>
                            <Name href="/perfil">{value.name}</Name>
                        </div>
                    </HeaderInfo>
                    <ExitIconHeader onClick={handleLogout} />
                </HeaderActions>
            </Wrapper>
        </Container>
    );
}

export const MemorizedHeader = React.memo(Header);
