import { Button, ButtonProps, chakra, Text } from '@chakra-ui/react'
export type Props = {
  text: string
} & ButtonProps
export const PositiveButton = (props: Props) => {
  const StyledButton = chakra(Button, {
    baseStyle: {
      fontSize: '1xl',
      backgroundColor: 'green.400',
      color: 'white',
      fontWeight: 600,
    },
  })
  return (
    <StyledButton {...props}>
      <Text fontSize={'1xl'} color={'white'}>
        {props.text}
      </Text>
    </StyledButton>
  )
}

export const NegativeButton = (props: Props) => {
  const StyledButton = chakra(Button, {
    baseStyle: {
      fontSize: '1xl',
      backgroundColor: 'white',
      color: 'green.400',
      fontWeight: 600,
    },
  })
  return (
    <StyledButton {...props} variant={'outline'}>
      <Text fontSize={'1xl'} color={'blackAlpha.700'}>
        {props.text}
      </Text>
    </StyledButton>
  )
}
