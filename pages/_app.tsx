import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Script from 'next/script'

const colors = {
  kakao: {
    500: '#fee500'
  }
}

const theme = extendTheme({ colors })
const MUITheme = createTheme({

})

function MyApp({ Component, pageProps }: AppProps) {
  const KAKAO_MAP_KEY = "34c385f85c12d6b6fa19a40539c67b02"
  const KAKAO_LIBRARY = "services"

  return (
    <ThemeProvider theme={MUITheme}>
      <ChakraProvider theme={theme}>
          <CssBaseline />
          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&libraries=${KAKAO_LIBRARY}&autoload=false`}
            strategy="beforeInteractive"
          />
          <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default MyApp
