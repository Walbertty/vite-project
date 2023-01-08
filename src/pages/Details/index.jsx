//import { Fragment } from "react" - Usado para desfragmentar mas não recebe estilização
import { Container, Links, Content } from "./styles"

import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"


export function Details() {

    return (
        <Container>
            <Header />

            <main>
                <Content>
                <ButtonText title="Excluir nota" />

                <h1>Introdução ao React</h1>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa assumenda sunt,
                   pariatur doloribus aliquid quam. Explicabo sit perspiciatis dolore, sed expedita
                   quidem culpa. Sint maxime consequuntur voluptate perferendis molestiae consectetur?
                </p>

                <Section title="Links úteis">
                    <Links>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                    </Links>
                </Section>

                <Section title="Marcadores">
                    <Tag title="express"/>
                    <Tag title="nodejs"/>
                </Section>

            <Button title="Voltar" />
                </Content>
            </main>
        </Container>
    )
}