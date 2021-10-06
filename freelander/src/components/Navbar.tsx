import { Flex, useColorMode, Switch, Button , IconButton, Heading} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import NextLink from 'next/link'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export const Navbar = ({ title, includePricingPage, includeContactPage}: { title: string, includePricingPage: boolean, includeContactPage: boolean }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')

  return (
    <Flex>
      <Flex
        pos="fixed"
        top="2rem"
        left="3rem"
        height="100vh"
        bgGradient="linear(to-l, #FFA500, #FF0080)"
        bgClip="text"
      >
        <Heading fontSize="2rem">{title}</Heading>
      </Flex>
      <Flex pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>
          {includePricingPage ? <NextLink href="/pricing" passHref>
            <Button as="a" variant="ghost" aria-label="Pricing" my={5} w="100%">
              Pricing
            </Button>
          </NextLink> : null}
          {includeContactPage? <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </NextLink> : null}
        </Flex>
      <IconButton
       aria-label="Open Menu"
       size="lg"
       mr={2}
       icon={<HamburgerIcon/>}
       display={['flex', 'flex', 'none', 'none']}
       onClick={() => changeDisplay('flex')}/>
      <Switch
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
     </Flex>
      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}>
          <Flex justify="flex-end">
            <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            icon={<CloseIcon/>}
            display={['flex', 'flex', 'none', 'none']}
            onClick={() => changeDisplay('none')}/>
          </Flex>
      <Flex
        flexDir="column"
        align="center">
      <NextLink href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </NextLink>
            {includePricingPage ? <NextLink href="/pricing" passHref>
            <Button as="a" variant="ghost" aria-label="Pricing" my={5} w="100%">
              Pricing
            </Button>
          </NextLink> : null}
          {includeContactPage? <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </NextLink> : null}
        </Flex>
        </Flex>   
    </Flex>

  )
}

Navbar.defaultProps = {
  title: 'Freelander',
  includePricingPage: true,
  includeContactPage: true
}

