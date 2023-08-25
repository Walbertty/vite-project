import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from './styles';

export function Header() {
    const { signOut } = useAuth();
    return (
    <Container to="/profile">
        <Profile to="/profile">
            <img 
                src="https://github.com/Walbertty.png"
                alt="Foto do Usuário"
            />

            <div>
                <span>Bem-vindo</span>
                <strong>Walbertty Lopes</strong>
            </div>
        </Profile>

        <Logout onClick={signOut}>
            <RiShutDownLine />
        </Logout>

    </Container>
    )
}