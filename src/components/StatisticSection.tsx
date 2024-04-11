import { Divider, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import { statistics } from '../utils'
import Statistic from './Statistic'

const StatisticSection = () => {
    const [isLargerThan992] = useMediaQuery('(min-width: 992px)')

    return (
        <SimpleGrid
            mt={'6rem'}
            columns={{
                base: 1,
                lg: 3
            }}
            spacingX={'3rem'}
            spacingY={{
                base: '5rem',
                md: '7rem'
            }}
            pos={'relative'}
            justifyContent={'center'}
        >
            <Divider
                border={'5px solid hsl(180, 66%, 49%)'}
                pos={'absolute'}
                w={'90%'}
                left={'50%'}
                top={'50%'}
                translateX={'-50%'}
                translateY={'-50%'}
                transform={'auto'}
                rotate={isLargerThan992 ? 0 : 90}
            />
            {statistics.map((statistic, index) => (
                <Statistic key={index} src={statistic.src} alt={statistic.alt} text={statistic.text} heading={statistic.heading} />
            ))}
        </SimpleGrid>
    )
}

export default StatisticSection
