import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    Input,
    SimpleGrid,
    useMediaQuery,
    useToast
} from '@chakra-ui/react'
import bgShortenDesktop from '../assets/images/bg-shorten-desktop.svg'
import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import copy from 'copy-to-clipboard'

interface ShortenedUrl {
    originalUrl: string
    shortenedUrl: string
}

const ShortenItSection = () => {
    const [isInvalid, setIsinvalid] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [url, setUrl] = useState<string>('')
    const toast = useToast()
    const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>([])
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    const shortenUrl = async () => {
        if (url === '') {
            setIsinvalid(true)
            setErrorMessage('Please add a link')
            return
        }
        try {
            const parsedUrl = new URL(url)

            const data = new URLSearchParams({
                url: parsedUrl.href
            })

            const response = await axios.request({
                method: 'POST',
                url: 'https://url-shortener-service.p.rapidapi.com/shorten',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': '235a7af51bmsh00deca4efdf664dp19613ajsnda4dbffffb9a',
                    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
                },
                data
            })

            const { result_url } = response.data

            setShortenedUrls(prev => [
                ...prev,
                {
                    originalUrl: url,
                    shortenedUrl: result_url
                }
            ])

            toast({
                duration: 2000,
                status: 'success',
                isClosable: true,
                description: 'URL encurtado com sucesso'
            })
        } catch (error: any) {
            console.error(error)

            if (error instanceof TypeError) {
                toast({
                    duration: 2000,
                    status: 'error',
                    isClosable: true,
                    description: 'Insira um URL válido'
                })
            } else if (error instanceof AxiosError) {
                toast({
                    duration: 2000,
                    status: 'error',
                    isClosable: true,
                    description: 'Erro ao fazer requisição'
                })
            }
        }
    }

    const handleCopy = (target: any, index: number) => {
        target.style.backgroundColor = 'hsl(257, 27%, 26%)'
        target.innerText = 'Copied'

        const isCopied = copy(shortenedUrls[index].shortenedUrl)

        if (isCopied) {
            toast({
                description: 'Copiado para a área de transferência',
                status: 'success',
                duration: 2000,
                isClosable: true
            })
        }

        setInterval(() => {
            target.style.backgroundColor = 'hsl(180, 66%, 49%)'
            target.innerText = 'Copy'
        }, 5000)
    }

    return (
        <>
            <Box mt={'3rem'} bgGradient='linear(white 50%, gray.100 50%)'>
                <Container maxW={'container.lg'}>
                    <Box
                        bgImage={bgShortenDesktop}
                        bgColor={'hsl(257, 27%, 26%)'}
                        borderRadius={'lg'}
                        p={{
                            base: 5,
                            md: '3rem'
                        }}
                    >
                        <FormControl isInvalid={isInvalid}>
                            <Flex
                                flexDirection={{
                                    base: 'column',
                                    md: 'row'
                                }}
                                gap={5}
                            >
                                <Input
                                    value={url}
                                    onChange={e => setUrl(e.target.value)}
                                    size={'lg'}
                                    bgColor={'white'}
                                    placeholder='Shorten a link here...'
                                />
                                <Button
                                    onClick={shortenUrl}
                                    _hover={{
                                        bgColor: 'hsl(180, 66%, 69%)'
                                    }}
                                    borderRadius={'md'}
                                    size={'lg'}
                                >
                                    Shorten It!
                                </Button>
                            </Flex>
                            <FormErrorMessage as={'i'}>{errorMessage}</FormErrorMessage>
                        </FormControl>
                    </Box>
                </Container>
            </Box>

            <Box pt={'2rem'} bgColor={'gray.100'}>
                <Container maxW={'container.lg'}>
                    <SimpleGrid gap={'1rem'} columns={1}>
                        {shortenedUrls.map((url, key) => (
                            <SimpleGrid
                                key={key}
                                gap={'1rem'}
                                bgColor={'white'}
                                justifyContent={'center'}
                                py={'1rem'}
                                px={'2rem'}
                                borderRadius={'lg'}
                                columns={{
                                    base: 1,
                                    md: 2
                                }}
                            >
                                <Heading size={'sm'}>{url.originalUrl}</Heading>
                                {isLargerThan768 || <Divider />}
                                <Flex
                                    flexDirection={{
                                        base: 'column',
                                        md: 'row'
                                    }}
                                    align={{
                                        base: 'start',
                                        md: 'center'
                                    }}
                                    justify={'end'}
                                    gap={'1rem'}
                                >
                                    <Heading color={'hsl(180, 66%, 49%)'} size={'sm'}>
                                        {url.shortenedUrl}
                                    </Heading>
                                    <Button
                                        w={{
                                            base: 'full',
                                            md: '6rem'
                                        }}
                                        onClick={e => handleCopy(e.target, key)}
                                        size={'md'}
                                        borderRadius={'lg'}
                                    >
                                        Copy
                                    </Button>
                                </Flex>
                            </SimpleGrid>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    )
}

export default ShortenItSection
