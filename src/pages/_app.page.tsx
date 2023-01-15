import type {AppProps} from 'next/app'
import {globalStyles} from '../styles/global'
import Head from 'next/head'

globalStyles()
export default function App ({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
                      integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
                      crossOrigin=""/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
