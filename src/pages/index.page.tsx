import {
    Container,
    AboutUsContent,
    AboutUsTitle,
    BrideAndGroomContent,
    Bride,
    Groom,
    ImageContent,
    Text,
    OurStory,
    MarriageProposal,
    KnowingEachOtherUntilMarriage,
    DefaultTitle,
    OurStoryTitle,
    MarriageProposalTitle,
    OurStoryText,
    MarriageProposalText,
    ConfirmAttendanceContent,
    CountDownContent,
    NextEventContent,
    MapOfEvent,
    InformationEvent,
    CheckBoxesConfirm,
    ConfirmAttendanceInput,
    LabelConfirmAttendance,
    ConfirmAttendanceTitle,
    ConfirmAttendanceButton,
} from '../styles/pages/app'
import Product from './product/product'
import Image from 'next/image'
import {faker} from '@faker-js/faker/locale/pt_BR'

const image = faker.image.people()
const bigText = 'Repellat accusamus beatae sapiente sint aperiam. At magnam temporibus eos aut incidunt. Explicabo quam labore tempore beatae sapiente maiores. Expedita optio temporibus dolore ratione magni perferendis qui. Accusamus eius maxime beatae tenetur eius. Animi dolore accusantium ad. Sapiente animi vel. Veritatis error est laborum dolorum. Tempora voluptatem cupiditate quam expedita omnis quam temporibus. Corporis exercitationem reiciendis minima quam nihil. Molestias iure ipsam necessitatibus inventore minus. Ducimus earum harum id voluptate. Hic ratione odio assumenda sint alias repellat a. Labore commodi itaque. Beatae perferendis nam libero eum beatae. Dolorem voluptatibus molestias sunt laborum voluptatum nihil tempore doloremque.'
export default function Home () {

    return (
        <Container>
            <Text>Lucas e Ana</Text>
            <ImageContent>
                <Text>
                    Bem-vindos! Queridos amigos e familiares, o dia mais especial de nossas vidas está chegando e
                    gostariámos de contar com a presença de todos vocês.
                </Text>
            </ImageContent>
            <AboutUsContent>
                <AboutUsTitle>Os noivos</AboutUsTitle>
                <BrideAndGroomContent>
                    <Bride>
                        <DefaultTitle>A noiva</DefaultTitle>
                        <p>Ana cleide</p>
                    </Bride>
                    <Image src={image} alt={''} width={300} height={300}/>
                    <Groom>
                        <DefaultTitle>O noivo</DefaultTitle>
                        <p>Lucas Luan</p>
                    </Groom>
                </BrideAndGroomContent>

                <KnowingEachOtherUntilMarriage>
                    <OurStory>
                        <OurStoryTitle>Nossa História</OurStoryTitle>
                        <OurStoryText>{bigText}</OurStoryText>
                    </OurStory>
                    <MarriageProposal>
                        <MarriageProposalTitle>O Pedido</MarriageProposalTitle>
                        <MarriageProposalText>{bigText}</MarriageProposalText>
                    </MarriageProposal>
                </KnowingEachOtherUntilMarriage>
            </AboutUsContent>
            <ConfirmAttendanceContent>
                <ConfirmAttendanceTitle>Confirme sua presença</ConfirmAttendanceTitle>

                <LabelConfirmAttendance>Seu nome completo:</LabelConfirmAttendance>
                <ConfirmAttendanceInput type="text"/>

                <CheckBoxesConfirm>
                    <input type="checkbox"/>
                    <p>Confirme apenas a minha presença</p>
                    <div style={{margin: '0.5rem'}}></div>
                    <input type="checkbox"/>
                    <p>Confirme a presença de todos a quem o convite foi destinado</p>
                </CheckBoxesConfirm>


                <ConfirmAttendanceButton>CONFIRMAR PRESENÇA</ConfirmAttendanceButton>
            </ConfirmAttendanceContent>
            <CountDownContent>
                <Text>Contagem regressiva</Text>
            </CountDownContent>
            <NextEventContent>
                <InformationEvent>
                    <Text>Casamento</Text>
                    <h3>Data:</h3>
                    <p>10/10/2021</p>
                    <h3>Local:</h3>
                    <p>Av. Paulista, 1000</p>
                    <h3>Horário:</h3>
                    <p>10:00</p>
                </InformationEvent>
                <MapOfEvent>

                    <h1>t</h1>
                </MapOfEvent>
            </NextEventContent>
        </Container>
    )
}
