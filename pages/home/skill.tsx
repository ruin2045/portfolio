import { Stack, Text, chakra } from '@chakra-ui/react'
function Skill() {
  const StyledText = chakra(Text, {
    baseStyle: {
      fontSize: '5xl',
      color: 'green.400',
      fontWeight: 600,
    },
  })

  return (
    <Stack spacing={3} width="100%" marginLeft={'2%'}>
      <StyledText>・React(2年)</StyledText>
      <StyledText>・TypeScript(2年)</StyledText>
      <StyledText>・Node.js(2年)</StyledText>
      <StyledText>・GraphQL(1年)</StyledText>
      <StyledText>・Java(半年)</StyledText>
    </Stack>
  )
}

export default Skill
