import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import Stripe from 'stripe';
import { stripe } from '../../lib/stripe';
import { ProductContainer, ProductContent, ProductImage, ProductInfo } from '../../styles/page/product'
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


interface Product {
    id: string
    description: string;
    name: string;
    imageURL: string;
    price: string
    priceId: string
}

const Product = ({ products }: ProductProps) => {
    const handleContribute = async (unitProduct:Product) => {
        try {
            const formData = new FormData()
            formData.append('priceId', unitProduct.priceId)
            
            const response  =  await axios.post('/api/checkout', {
                priceId: unitProduct.priceId
            })


            const { checkoutURL } = response.data

            window.location.href = checkoutURL

        } catch (error) {
            console.error('Ocorreu um erro ao processar o pagamento', {
                cause: error,
            })
        }
    }

    return (
        <ProductContainer>
            {products.map(product => {
                return (
                    <ProductContent key={product.id}>
                        <ProductImage>
                            <Image src={product.imageURL} alt='' width={300} height={300} />
                        </ProductImage>
                        <h3>{product?.name}</h3>
                        <ProductInfo>
                            <p>{product?.description}</p>
                        </ProductInfo>
                        <button onClick={() => {
                            handleContribute(product)
                        }}>{product.price}</button>
                    </ProductContent>
                )
            })}
        </ProductContainer>
    )
}

export default Product