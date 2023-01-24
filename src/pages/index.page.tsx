import dynamic from 'next/dynamic'
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
    NextEventContent,
    MapOfEvent,
    InformationEvent,
    CheckBoxesConfirm,
    ConfirmAttendanceInput,
    LabelConfirmAttendance,
    ConfirmAttendanceTitle,
    ConfirmAttendanceButton, TipsContent, Header,
} from '../styles/page/app'

import Image from 'next/image'
import { faker } from '@faker-js/faker/locale/pt_BR'
import CountdownTimer from './components/Counter'

import Product from './product/product'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'



const image = faker.image.nightlife()
const bigText = 'Repellat accusamus beatae sapiente sint aperiam. At magnam temporibus eos aut incidunt. Explicabo quam labore tempore beatae sapiente maiores. Expedita optio temporibus dolore ratione magni perferendis qui. Accusamus eius maxime beatae tenetur eius. Animi dolore accusantium ad. Sapiente animi vel. Veritatis error est laborum dolorum. Tempora voluptatem cupiditate quam expedita omnis quam temporibus. Corporis exercitationem reiciendis minima quam nihil. Molestias iure ipsam necessitatibus inventore minus. Ducimus earum harum id voluptate. Hic ratione odio assumenda sint alias repellat a. Labore commodi itaque. Beatae perferendis nam libero eum beatae. Dolorem voluptatibus molestias sunt laborum voluptatum nihil tempore doloremque.'

interface ProductProps {
    products: {
        id: string
        description: string;
        name: string;
        imageURL: string;
        price: string
        priceId: string
    }[]
}

export default function Home({ products }: ProductProps) {

    return (
        <Container>
            <Text>Lucas e Ana</Text>
            <Header>
                <a href="#aboutus">Os noivos</a>
                <a href="#confirmAttendance">Confirmar Presença</a>
                <a href="#countdown">Contagem Regressiva</a>
                <a href="#nextevent">Próximos Eventos</a>
                <a href="#tips">Dicas</a>
            </Header>
            <ImageContent>
                <Image
                    src={image}
                    height={400}
                    width={2000}
                    style={{ objectFit: 'cover', width: '100%' }}
                    alt={''}
                    quality={100}
                    priority
                />
                <Text>
                    Bem-vindos! Queridos amigos e familiares, o dia mais especial de nossas vidas está chegando e
                    gostariámos de contar com a presença de todos vocês.
                </Text>
            </ImageContent>
            <AboutUsContent id="aboutus">
                <AboutUsTitle>Os noivos</AboutUsTitle>
                <BrideAndGroomContent>
                    <Bride>
                        <DefaultTitle>A noiva</DefaultTitle>
                        <p>Ana cleide</p>
                    </Bride>
                    <Image priority src={image} alt={''} width={300} height={300} />
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
            <ConfirmAttendanceContent id="confirmAttendance">
                <ConfirmAttendanceTitle>Confirme sua presença</ConfirmAttendanceTitle>

                <LabelConfirmAttendance>Seu nome completo:</LabelConfirmAttendance>
                <ConfirmAttendanceInput type="text" />

                <CheckBoxesConfirm>
                    <input type="checkbox" />
                    <p>Confirme apenas a minha presença</p>
                    <div style={{ margin: '0.5rem' }}></div>
                    <input type="checkbox" />
                    <p>Confirme a presença de todos a quem o convite foi destinado</p>
                </CheckBoxesConfirm>


                <ConfirmAttendanceButton>CONFIRMAR PRESENÇA</ConfirmAttendanceButton>
            </ConfirmAttendanceContent>

            <CountdownTimer targetDate={new Date('2023-10-28 15:00:00')} />

            <Text>Próximos eventos</Text>
            <NextEventContent id="nextevent">
                <InformationEvent>
                    <Text>Casamento</Text>
                    <h3>Data:</h3>
                    <p>28/10/2023</p>
                    <h3>Local:</h3>
                    <p>Parque da cidade</p>
                    <h3>Horário:</h3>
                    <p>15:00</p>
                </InformationEvent>
                <MapOfEvent>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10595.518927284726!2d-47.91009065039261!3d-15.79434745364092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a8d1adcfa01%3A0x28135d84739659de!2sParque%20da%20Cidade%20Sarah%20Kubitschek!5e0!3m2!1spt-BR!2sbr!4v1673800809201!5m2!1spt-BR!2sbr"
                        width="600" height="450" allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </MapOfEvent>
            </NextEventContent>

            <TipsContent id="tips">
                <ConfirmAttendanceTitle>Dicas</ConfirmAttendanceTitle>
                <ul>
                    <li>O local será no parque da cidade recheado de árvores e plantas. Apesar do horário ser X, a noite
                        costuma esfriar. Não esqueça de levar um casaquinho.
                    </li>
                    <li>Esta daqui é outra dica para o dia do casamento</li>
                    <li>Esta daqui é mais uma outra dica</li>
                    <li>Esta nem se fala, uma dicona</li>
                    <li>Esta é uma diquissíma importantissíma</li>
                </ul>
            </TipsContent>
            <div>
                <Product products={products} />
            </div>
        </Container>
    )
}

export const getStaticProps:GetStaticProps = async () => {
    try {
        const response = await stripe.products.list({
            expand: ['data.default_price'],
        })
        if (!response) {
            console.log('Response deu ruim', {
                cause: response,
            })
        }

        const formatAmount = (amount: number | null) => {
            if (!amount) return
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(amount / 100)
        }
        const products = response.data.map(product => {
            const price = product.default_price as Stripe.Price
            console.log('PRICE', price)
            return {
                id: product.id,
                name: product.name,
                description: product.description,
                imageURL: product.images[0],
                price: formatAmount(price.unit_amount),
                priceId: price.id
            }
        })


        return {
            props: { products },
            revalidate: 60* 60 * 24, // 24 hours
        }
    } catch (error) {
        console.error('Deu ruim', {
            cause: error,
        })
        return {
            props: {},
            revalidate: 60* 60 * 24, // 24 hours
        }
    }
}