import { Box, Flex, Heading, Image, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import Logo from '../Fragments/Logo'
import { footerLinks, footerSocials } from '../utils'

const Footer = () => {
    return (
        <Box bgColor={'hsl(260, 8%, 14%)'}>
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    lg: 4,
                    xl: 5
                }}
                gap={{
                    base: '3rem',
                    md: '1rem'
                }}
                justifyItems={'center'}
                alignItems={{
                    base: 'center',
                    md: 'start'
                }}
                maxW={'container.lg'}
                mx={'auto'}
                py={'3rem'}
            >
                <Logo fill={'white'} />
                {Object.keys(footerLinks).map((key, index) => (
                    <Stack
                        key={index}
                        textAlign={{
                            base: 'center',
                            lg: 'left'
                        }}
                    >
                        <Heading mb={'1rem'} color={'white'} size={'sm'} textTransform={'capitalize'}>
                            {key}
                        </Heading>
                        {footerLinks[key].map((link, index) => (
                            <Link key={index} variant={'footer'}>
                                {link}
                            </Link>
                        ))}
                    </Stack>
                ))}
                <Flex gap={'2rem'}>
                    {footerSocials.map((social, index) => (
                        <Image
                            key={index}
                            _hover={{
                                cursor: 'pointer'
                            }}
                            src={social.src}
                            alt={social.alt}
                        />
                    ))}
                </Flex>
            </SimpleGrid>
        </Box>
    )
}

export default Footer
