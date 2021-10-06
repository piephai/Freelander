import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
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
)

Hero.defaultProps = {
  title: 'Freelander',
}
