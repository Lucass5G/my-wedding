import {ProductContainer, ProductImage, ProductInfo} from '../../styles/pages/product'
import champanheImage from '../../assets/champanhe.png'
import Image from 'next/image'

interface ProductProps {
    description: string;
    name: string;
    ImageURL?: string;
}

export default function Product ({description, name, ImageURL}: ProductProps) {
    return (
        <ProductContainer>
            <h1>{name}</h1>
            <ProductImage>
                <Image src={champanheImage} alt={''} width={300}/>
            </ProductImage>
            <ProductInfo>
                <p>{description}</p>
            </ProductInfo>
        </ProductContainer>
    )
}