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
                    justifyItems={'center'}
                    alignItems={'center'}
                >
                    <Box
                        textAlign={{
                            base: 'center',
                            lg: 'left'
                        }}
                    >
                        <Heading as={'h1'} lineHeight={1.2} size={'3xl'}>
                            More than just shorter links
                        </Heading>
                        <Text fontSize='xl' mt={'1rem'} mb={'2rem'}>
                            Build your brand’s recognition and get detailed insights on how your links are performing.
                        </Text>
                        <Button size={'lg'}>Get Started</Button>
                    </Box>

                    <Image src={illustrationWorking} alt='Illustration Working' />
                </SimpleGrid>
            </Container>
        </>
    )
}

export default Header
