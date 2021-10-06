import { ChakraProvider } from '@chakra-ui/react'
import { PortfolioProvider } from '../context/context'

import theme from '../theme'

import {specialOptions, aboutData, projectsData, contactData, footerData } from '../setup/data'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const [options, setSpecialOptions] = useState({})
  const [about, setAbout] = useState({})
  const [projects, setProjects] = useState({})
  const [contact, setContact] = useState({})
  const [footer, setFooter] = useState({})

  useEffect(() => {
    setSpecialOptions({ ...specialOptions});
    setAbout({ ...aboutData});
    setProjects({ ...projectsData});
    setContact({...contactData});
    setFooter({...footerData});
  }, [])

  return (
    <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
