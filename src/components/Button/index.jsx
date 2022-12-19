import { Container } from "../styles";

export function Button({ title, loading = false, ...rest }) {

    return(
    <Container 
        type="button"
        disabled={loading}
        {...rest} // usado quando temos muitas outras propriedades
    >
        { loading ? "loading..." : title }
    </Container>
    );
}