import {Flex, Button, Stack} from '@chakra-ui/react'
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'Yup' 
import {yupResolver} from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SignInFormatdata = {

  email: string;
  password: string;

}

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})


export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const {errors} = formState

  const handleSignIn:SubmitHandler<SignInFormatdata> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="Email" 
            error={errors.email}
            {...register('email')}
          />

          <Input 
            name="password" 
            error={errors.password}
            type="password" 
            label="Password" 
            {...register('password')}

          />


        </Stack>


        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}

        >
          Entrar

        </Button>

      </Flex>
    </Flex>
  )
}
