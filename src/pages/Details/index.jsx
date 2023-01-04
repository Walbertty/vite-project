//import { Fragment } from "react" - Usado para desfragmentar mas não recebe estilização
import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

export function Details() {

    return (
        <Container>
            <Header />

            <Section tittle="Links úteis">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Section>

            <Button title="Voltar" />
        </Container>
    )
}