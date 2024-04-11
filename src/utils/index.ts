import { FooterLinks, FooterSocials, StatisticInterface } from '../interfaces'
import iconBrandRecognition from '../assets/images/icon-brand-recognition.svg'
import iconDetailedRecords from '../assets/images/icon-detailed-records.svg'
import iconFullyCustomizable from '../assets/images/icon-fully-customizable.svg'
import iconFacebook from '../assets/images/icon-facebook.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'
import iconPinterest from '../assets/images/icon-pinterest.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'

const statistics: StatisticInterface[] = [
    {
        src: iconBrandRecognition,
        text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
        alt: 'Icon Brand Recognition',
        heading: 'Brand Recognition'
    },
    {
        src: iconDetailedRecords,
        text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
        alt: 'Icon Detailed Records',
        heading: 'Detailed Records'
    },
    {
        src: iconFullyCustomizable,
        text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
        alt: 'Icon Fully Customizable',
        heading: 'Fully Customizable'
    }
]

const footerLinks: FooterLinks = {
    features: ['Link Shortening', 'Branded Links', 'Analytics'],
    resources: ['Blog', 'Developers', 'Support'],
    company: ['About', 'Our Team', 'Careers', 'Contact']
}


const footerSocials: FooterSocials[] = [
    {
        src: iconFacebook,
        alt: 'Facebook Icon'
    },
    {
        src: iconTwitter,
        alt: 'Twitter Icon'
    },
    {
        src: iconPinterest,
        alt: 'Pinterest Icon'
    },
    {
        src: iconInstagram,
        alt: 'Instagram Icon'
    }
]

export {
    statistics,
    footerLinks,
    footerSocials
} 