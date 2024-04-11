import { Button, Center, Heading } from '@chakra-ui/react'
import bgBoostDesktop from '../assets/images/bg-boost-desktop.svg'

const BoostSection = () => {
    return (
        <Center
            gap={'3rem'}
            p={'3rem'}
            flexDirection={'column'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgPos={'center'}
            bgImage={bgBoostDesktop}
            bgColor={'hsl(257, 27%, 26%)'}
        >
            <Heading textAlign={'center'} textColor={'white'}>
                Boost your links today
            </Heading>
            <Button size={'lg'}>Get Started</Button>
        </Center>
    )
}

export default BoostSection
