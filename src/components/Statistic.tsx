import { Box, Card, CardBody, CardHeader, Image, Heading, Text } from '@chakra-ui/react'

import { StatisticInterface } from '../interfaces'

const Statistic = (props: StatisticInterface) => {
    return (
        <Card>
            <CardHeader>
                <Box
                    pos={'absolute'}
                    transform={'auto'}
                    translateY={'-50%'}
                    translateX={{
                        base: '-50%',
                        lg: '10%'
                    }}
                    top={'0'}
                    left={{
                        base: '50%',
                        lg: '10%'
                    }}
                    p={'2rem'}
                    bgColor={'hsl(257, 27%, 26%)'}
                    borderRadius={'full'}
                >
                    <Image src={props.src} alt={props.alt} />
                </Box>
            </CardHeader>
            <CardBody
                mt={'2rem'}
                textAlign={{
                    base: 'center',
                    lg: 'left'
                }}
            >
                <Heading size={'md'}>{props.heading}</Heading>
                <Text py={'1rem'}>{props.text}</Text>
            </CardBody>
        </Card>
    )
}

export default Statistic
