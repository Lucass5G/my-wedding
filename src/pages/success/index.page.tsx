import { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ImageContainer, SucessContainer } from "./styles"

interface SuccessProps {
    customerName: string
    product: {
        name: string
        imageURL: string
    }
}

export default function Success({ customerName, product }: SuccessProps) {
    return (
        <>
            <Head>
                <title>Contribuição efetuada</title>
                <meta name="robots" content="noindex" />
            </Head>
            <SucessContainer>
                <h1>Contribuição efetuada</h1>
                <ImageContainer>
                    <Image src={product.imageURL} alt='' width={200} height={200} />
                </ImageContainer>
                <p>Uhuuul <strong>{customerName}</strong></p>,
                <p>sua contribuição comprando <strong>{product.name}</strong> foi um sucesso e nos ajudará muuuito, valeu!</p>

                <Link href='/'>
                    Voltar para a página inicial
                </Link>
            </SucessContainer>
        </>
    )
}

export const getServerSideProps:GetServerSideProps = async ({query}) => {
    const { session_id} = query

    if(!session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const session = await stripe.checkout.sessions.retrieve(session_id as string, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName =  session.customer_details?.name || 'Anônimo'
    const product =  session.line_items?.data[0]?.price?.product as Stripe.Product

    return{
        props: {
            customerName: customerName,
            product: {
                name: product.name,
                imageURL: product.images[0]
            }
        }
    }
}