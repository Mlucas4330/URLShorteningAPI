import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// :root {
//   --cyan: hsl(180, 66%, 49%);
//   --dark-violet: hsl(257, 27%, 26%);
//   --red: hsl(0, 87%, 67%);
//   --gray: hsl(0, 0%, 75%);
//   --grayish-violet: hsl(257, 7%, 63%);
//   --very-dark-blue: hsl(255, 11%, 22%);
//   --very-dark-violet: hsl(260, 8%, 14%);
// }

const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    components: {
        Heading: {
            baseStyle: {
                color: 'hsl(255, 11%, 22%)'
            }
        },
        Link: {
            baseStyle: {
                fontWeight: 500,
                color: 'hsl(257, 7%, 63%)'
            },
            variants: {
                header: {
                    _hover: {
                        textDecoration: 'none',
                        color: 'hsl(260, 8%, 14%)'
                    }
                },
                footer: {
                    _hover: {
                        textDecoration: 'none',
                        color: 'hsl(180, 66%, 49%)'
                    }
                }
            }
        },
        Button: {
            baseStyle: {
                bgColor: 'hsl(180, 66%, 49%)',
                color: 'white',
                fontWeight: 500,
                _hover: {
                    bgColor: 'hsl(180, 66%, 49%, .5)'
                },
                borderRadius: '3xl'
            },
            defaultProps: {
                colorScheme: 'none'
            }
        },
        Text: {
            baseStyle: {
                color: 'hsl(257, 7%, 63%)',
                fontWeight: 500
            }
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
)

