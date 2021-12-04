import {
    Box, 
    Button, 
    Icon, 
    Flex, 
    Heading, 
    Table, 
    Thead, 
    Tr, 
    Th, 
    Tbody, 
    Td, 
    Checkbox,
    Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import Link from 'next/link'
export default function UserList() {
    const isWideVersion = useBreakpointValue({ 
        base: false,
        lg: true 
    })
    return (
        <Box>
            <Header/>

            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >

                <Sidebar/>

                <Box
                    w="100%" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}
                >
                    <Flex
                        mb="8" justify="space-between" align="center"
                    >
                        <Heading
                            size="lg" fontWeight="normal"
                        >
                            Usuários
                        </Heading>

                        <Link href="users/create" passHref>
                        
                            <Button
                                as ="a" 
                                size="sm" 
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={ <Icon as={RiAddLine} fontSize="20"/>}
                                
                            >
                                {isWideVersion ? 'Criar novo usuário' : 'Novo usuário'}
                            </Button>
                        </Link>


                    </Flex>

                    <Table  colorScheme="whiteAlpha">
                        <Thead>
                            <Tr w="100%">
                                <Th px={["4", "4", "6"]} color="gray.300" width={["6", "8"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>
                                    Usuário
                                </Th>
                                {isWideVersion && 
                                    <Th>
                                        Data de cadastro
                                    </Th>
                                }
                                <Th
                                    width={["6", "8"]}
                                >

                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr w="100%">
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"/>

                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">
                                            Stefano Pontelli
                                        </Text>
                                        <Text fontSize="sm" color="gray.300">
                                            stefanopontelli@hotmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                { isWideVersion &&
                                    <Td>
                                        20 de Setembro, 2021
                                    </Td>
                                }
                                <Td>
                                {isWideVersion && 
                                    <Button
                                        as ="a" 
                                        size="sm" 
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={ <Icon as={RiPencilLine} fontSize="16"/>}
                                    >
                                        
                                    </Button>
                                }
                                </Td>
                            </Tr>
                        </Tbody>

                    </Table>

                    <Pagination/>
                </Box>

            </Flex>
        </Box>
    )
}