import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';

export function Header() {
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

        <Logout>
            <RiShutDownLine />
        </Logout>

    </Container>
    )
}