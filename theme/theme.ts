import { extendTheme } from '@chakra-ui/react'

export const customTheme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        size: 'lg',
        variant: 'sm',
      },
    },
  },
})
