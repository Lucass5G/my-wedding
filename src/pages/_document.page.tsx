import {Html, Head, Main, NextScript} from 'next/document'
import {getCssText} from '../styles'
export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Dancing+Script&family=Cinzel&family=Handlee&display=swap" rel="stylesheet" />
                <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
                      integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
                      crossOrigin=""/>

                <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}