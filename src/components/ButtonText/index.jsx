import { Container } from './styles'

export function ButtonText({ title, isActive = false, ...rest }) {
    return (
        <Container
            type='button'
            isActive={isActive}t
            {...rest}
        >
            {title}
        </Container>    
    );
}