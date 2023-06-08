import { NegativeButton, PositiveButton } from '@/components/customButton'
import { EmailIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  Textarea,
  chakra,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
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
    <HStack alignItems={'center'} spacing={1} marginLeft={'2%'}>
      <StyledText>メールでのご連絡はこちらをクリック⇒</StyledText>
      <EmailIcon
        color={'green.400'}
        fontSize={'5xl'}
        onClick={handleEmailIconClick}
      />
      <MailModal isOpen={isOpen} onClose={onClose} />
    </HStack>
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
    formState: { errors },
  } = useForm<FormValues>()

  const handleSendClick: SubmitHandler<FormValues> = async (values) => {
    try {
      await axios({
        method: 'POST',
        url: 'https://1ga9bcga7j.execute-api.us-east-1.amazonaws.com/sendEmail',
        data: {
          title: values.title,
          text: values.text,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <form onSubmit={handleSubmit(handleSendClick)}>
        <ModalContent width={'60rem'}>
          <ModalHeader>
            <Text fontSize={'2xl'} color={'green.400'}>
              送信フォーム
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
  )
}

export default Contact
