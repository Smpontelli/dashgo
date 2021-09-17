import {Flex, Button, Stack} from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex 
      w="100vw" 
      h='100vh' 
      align="center" 
      justify='center'
    >

      <Flex 
        flexDir="column" 
        as='form' 
        w='100%' 
        maxWidth={360} 
        bg="gray.800" 
        p="8" 
        borderRadius={8}
      >

        <Stack spacing="4">
          <Input 
            name="email" 
            id="email" 
            type="email" 
            label="Email" 
          />

          <Input 
            name="password" 
            type="password" 
            id="password" 
            label="Password" 
          />


        </Stack>


        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          size="lg"

        >
          Entrar

        </Button>

      </Flex>
    </Flex>
  )
}