import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { priceId } = req.body

    console.log('CHECKOUT', req.body.priceId)

    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }

    if (!priceId) {
        res.status(400).end('Price ID is required')
    }

    const successURL = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelURL = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successURL,
        cancel_url: cancelURL,
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ]
    })
    
    console.log("*******************")
    console.log("CHECKOUT SESSION", checkoutSession)
    console.log("*******************")

    return res.status(201).json({ checkoutURL: checkoutSession.url})
}