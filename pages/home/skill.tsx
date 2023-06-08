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
    <Stack direction={'row'} justifyContent={'space-around'}>
      <Stack spacing={3} width={'21rem'}>
        <StyledText>■技術</StyledText>
        <StyledText>・TypeScript</StyledText>
        <StyledText>・React</StyledText>
        <StyledText>・Node.js</StyledText>
        <StyledText>・Java</StyledText>
        <StyledText>・Python</StyledText>
        <StyledText>・VBA</StyledText>
        <StyledText>・GraphQL</StyledText>
      </Stack>
      <Stack spacing={3} width={'21rem'}>
        <StyledText>■工程</StyledText>
        <StyledText>・要件定義</StyledText>
        <StyledText>・詳細設計</StyledText>
        <StyledText>・製造</StyledText>
        <StyledText>・単体テスト</StyledText>
      </Stack>
      <Stack spacing={3} width={'21rem'}>
        <StyledText>■管理</StyledText>
        <StyledText>・サブリーダー (2~4人管理)</StyledText>
      </Stack>
    </Stack>
  )
}

export default Skill
