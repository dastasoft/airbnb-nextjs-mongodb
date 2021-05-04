import { ChakraProvider } from "@chakra-ui/react"

import Layout from "@/components/Layout/index.js"

import "../styles/index.css"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
