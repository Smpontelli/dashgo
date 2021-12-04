import {Flex, Text, Box, Avatar} from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            { showProfileData && (
                <Box mr="4" textAlign="right">
                
                <Text>Stefano Pontelli</Text> 

                <Text color="gray.300" fontSize="small"
                >
                    stefanopontelli@hotmail.com
                </Text>  

            </Box>
            )}
            
            <Avatar size="md" nome="Stefano Pontelli" src="https://github.com/smpontelli.png"/>
        </Flex>
    )
}