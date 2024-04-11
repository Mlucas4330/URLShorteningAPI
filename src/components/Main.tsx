import { Box, Heading, Text, Container } from '@chakra-ui/react'
import StatisticSection from './StatisticSection'

const Main = () => {
    return (
        <Box as='main' bgColor={'gray.100'}>
            <Container py={'9rem'} maxW={'container.lg'}>
                <Heading textAlign={'center'}>Advanced Statistics</Heading>
                <Text
                    mx={{
                        base: '3rem',
                        md: '14rem'
                    }}
                    mt={'1rem'}
                    fontSize='lg'
                    textAlign={'center'}
                >
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </Text>

                <StatisticSection />
            </Container>
        </Box>
    )
}

export default Main
