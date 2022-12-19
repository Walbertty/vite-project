//import { Fragment } from "react" - Usado para desfragmentar mas não recebe estilização
import { Container } from "./styles"

import { Button } from "../../components/Button"

export function Details() {

    return (
        <Container>
        <h1>Hello Walbertty</h1>
        <span>Walbertty Lopes</span>

            <Button title="Entrar" loading />
            <Button title="Cadastrar" />
            <Button title="Voltar" />
        </Container>
    )
}