import { nanoid } from 'nanoid';


export const specialOptions = { 
    includeDarkModeSwitch: true,
    includePricingPage: true,
    includeContactPage: true,
}

export const aboutData = {
    title: `Freelander`,
    name: `Emilie Pomeroy`,
    paragraphOne: `Hi my name is Emilie`,
    paragraphTwo: ``,
    paragraphThree: ``
}

export const projectsData = [
    {
        id: nanoid(),
        img: ``,
        title: ``,
        url: ``,

    },
    {
        id: nanoid(),
        img: ``,
        title: ``,
        url: ``,

    },
    {
        id: nanoid(),
        img: ``,
        title: ``,
        url: ``,
    },
]

export const contactData = {
    callToAction: `Send me a message if you would like to work on something together`,
    email: ``
}

export const footerData = {
    networks : [
        {
            id: nanoid(),
            name: `twitter`,
            url: ``,
            logo: ``
        },
        {
            id: nanoid(),
            name: `instagram`,
            url: ``,
            logo: ``
        },
        {
            id: nanoid(),
            name: `facebook`,
            url: ``,
            logo: ``
        },
        {
            id: nanoid(),
            name: `linkedin`,
            url: ``,
            logo: ``
        },
    ]
}  
