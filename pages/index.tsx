import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Top() {
  const router = useRouter()
  return (
    <Box id="root">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={'5xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 56 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            <Text as={'span'} color={'green.400'} w="fit-content">
              ポートフォリオへようこそ
            </Text>
          </Heading>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              rounded={'full'}
              fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              onClick={() => router.push('home')}
            >
              閲覧する
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
