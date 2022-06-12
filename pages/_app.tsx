import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const colors = {
  kakao: {
    500: '#fee500'
  }
}

const theme = extendTheme({ colors })
const MUITheme = createTheme({

})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={MUITheme}>
      <ChakraProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default MyApp
