import { Stack, Text, chakra } from '@chakra-ui/react'
function Tech() {
  const StyledText = chakra(Text, {
    baseStyle: {
      fontSize: '5xl',
      color: 'green.400',
      fontWeight: 600,
    },
  })

  return (
    <Stack direction={'row'} justifyContent={'space-around'}>
      <Stack spacing={3}>
        <StyledText width={'21rem'}>■言語周辺</StyledText>
        <StyledText>・TypeScript</StyledText>
        <StyledText>・React</StyledText>
        <StyledText>・Next.js(SSG)</StyledText>
        <StyledText>・Chakra UI</StyledText>
      </Stack>
      <Stack width={'21rem'}>
        <StyledText>■CI/CD</StyledText>
        <StyledText>・github</StyledText>
        <StyledText>・CodeCommit</StyledText>
        <StyledText>・Amplify</StyledText>
      </Stack>
      <Stack width={'21rem'}>
        <StyledText>■メール送信</StyledText>
        <StyledText>・Amazon SES</StyledText>
        <StyledText>・Lambda</StyledText>
        <StyledText>・API Gateway</StyledText>
      </Stack>
    </Stack>
  )
}

export default Tech
