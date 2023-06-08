import { NegativeButton, PositiveButton } from '@/components/customButton'
import { EmailIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Spinner,
  Stack,
  Text,
  Textarea,
  chakra,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { Suspense, useState } from 'react'
import ReactDOM from 'react-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

const StyledText = chakra(Text, {
  baseStyle: {
    fontSize: '5xl',
    color: 'green.400',
    fontWeight: 600,
  },
})

function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  const handleEmailIconClick = () => {
    setIsOpen(true)
  }
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      spacing={5}
      justifyContent={'center'}
    >
      <StyledText>メールでのご連絡はこちらをクリック⇒</StyledText>
      <EmailIcon
        color={'green.400'}
        fontSize={'8xl'}
        onClick={handleEmailIconClick}
      />
      <MailModal isOpen={isOpen} onClose={onClose} />
    </Stack>
  )
}

type MailModalProps = {
  isOpen: boolean
  onClose: () => void
}
type FormValues = {
  title: string
  text: string
}
const MailModal = (props: MailModalProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>()
  const toast = useToast()
  const [isSendig, setIsSending] = useState(false)

  const handleSendClick: SubmitHandler<FormValues> = async (values) => {
    setIsSending(true)
    const axiosInstance = axios.create({
      baseURL: ' https://jd3rm079p1.execute-api.us-east-1.amazonaws.com',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    await axiosInstance
      .post('/sendEmail', {
        title: values.title,
        text: values.text,
      })
      .then(() => {
        props.onClose()
        reset()
        setIsSending(false)
        return toast({
          position: 'top',
          title: 'メールの送信に成功しました。',
          description: '',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      })
      .catch((e) => {
        console.log(`Error: ${e}`)
        setIsSending(false)
        return toast({
          position: 'top',
          title: 'メールの送信に失敗しました。',
          description: '',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      })
  }
  return (
    <>
      {isSendig && <MyBackDrop />}
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="6xl">
        <ModalOverlay />
        <form onSubmit={handleSubmit(handleSendClick)}>
          <ModalContent width={'60rem'}>
            <ModalHeader>
              <Text fontSize={'2xl'} color={'green.400'}>
                メールの送信
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Suspense fallback={<p>Loading...</p>}>
                <FormControl>
                  <FormLabel>タイトル</FormLabel>
                  <Input
                    type="text"
                    {...register('title', {
                      required: 'タイトルを入力してください。',
                    })}
                  />
                  {errors.text && (
                    <Text color={'red.500'} fontSize={'small'}>
                      入力してください
                    </Text>
                  )}
                  <FormLabel>本文</FormLabel>
                  <Textarea
                    rows={20}
                    {...register('text', {
                      required: true,
                    })}
                  />
                  {errors.text && (
                    <Text color={'red.500'} fontSize={'small'}>
                      入力してください
                    </Text>
                  )}
                </FormControl>
              </Suspense>
            </ModalBody>

            <ModalFooter>
              <NegativeButton onClick={props.onClose} text={'閉じる'} />
              <Spacer />
              <PositiveButton
                backgroundColor="green.400"
                text={'送信'}
                type="submit"
              />
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  )
}

const MyBackDrop = () => {
  return ReactDOM.createPortal(
    <>
      <Stack
        backgroundColor={'rgba(0, 0, 0, 0.1)'}
        zIndex={2000}
        width={'100vw'}
        height={'100vh'}
        position={'fixed'}
        top={0}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.400"
          size="xl"
          zIndex={2200}
          margin={'auto'}
          position={'fixed'}
        />
      </Stack>
    </>,
    document.body
  )
}

export default Contact
