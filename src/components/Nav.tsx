import { Flex, Link, Button, useMediaQuery } from '@chakra-ui/react'
import Logo from '../Fragments/Logo'
import { HamburgerIcon } from '@chakra-ui/icons'

const Nav = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    return (
        <>
            {isLargerThan768 ? (
                <Flex as={'nav'} justifyContent={'space-between'} align={'center'} py={'2rem'}>
                    <Flex align={'center'} gap={'2rem'}>
                        <Logo fill={'hsl(255, 11%, 22%)'} />
                        <Link variant={'header'}>Features</Link>
                        <Link variant={'header'}>Pricing</Link>
                        <Link variant={'header'}>Resources</Link>
                    </Flex>
                    <Flex align={'center'} gap={'2rem'}>
                        <Link variant={'header'}>Login</Link>
                        <Button>Sign Up</Button>
                    </Flex>
                </Flex>
            ) : (
                <Flex py={'2rem'} justifyContent={'space-between'} align={'center'}>
                    <Logo fill={'hsl(255, 11%, 22%)'} />
                    <HamburgerIcon boxSize={'2rem'} color={'hsl(0, 0%, 75%)'} />
                </Flex>
            )}
        </>
    )
}

export default Nav
