import React from 'react';
import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';

interface CardProps {
    image: string;
    title: string;
    flag?: string;
}

const Card: React.FC<CardProps> = ({ image, title, flag }) => (
    <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        height="400"
        >
        <Image
            src={image}
            height="300"
            alt={title}
            roundedTop="lg"
            width="100%"
        />

        <Box p="6">
            {flag && (<Box d="flex" alignItems="baseline">
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                    {flag}
                </Badge>
            </Box>)}
            <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated>
                    {title}
                </Box>
            </Flex>
        </Box>
    </Box>
)

export default Card;