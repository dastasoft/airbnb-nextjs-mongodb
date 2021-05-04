import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"

import Layout from "@/components/Layout/index.js"
import SEO from "../next-seo-config"

import "../styles/index.css"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
