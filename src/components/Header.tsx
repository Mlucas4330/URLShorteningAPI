import illustrationWorking from '../assets/images/illustration-working.svg'
import { Box, Button, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import Nav from './Nav'

const Header = () => {
    return (
        <>
            <Container maxW={'container.lg'}>
                <Nav />

                <SimpleGrid
                    py={'3rem'}
                    columns={{
                        base: 1,
                        lg: 2
                    }}
                    gap={'3rem'}
                    as={'header'}
                    alignItems={'center'}
                >
                    <Image
                        order={{
                            base: 0,
                            lg: 1
                        }}
                        src={illustrationWorking}
                        alt='Illustration Working'
                    />

                    <Box
                        textAlign={{
                            base: 'center',
                            lg: 'left'
                        }}
                    >
                        <Heading as={'h1'} size={'3xl'}>
                            More than just shorter links
                        </Heading>
                        <Text fontSize='xl' mt={'1rem'} mb={'2rem'}>
                            Build your brand’s recognition and get detailed insights on how your links are performing.
                        </Text>
                        <Button size={'lg'}>Get Started</Button>
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    )
}

export default Header
