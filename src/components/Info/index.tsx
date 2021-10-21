import React from 'react';
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = [
    {
        id: 1,
        title: 'Ingredientes de qualidade',
        text: 'Ingredientes frescos e sempre bem conservados',
    },
    {
        id: 2,
        title: 'Carne de qualidade',
        text: 'Trabalhamos somente com cortes premium dos melhores açougues',
    },
    {
        id: 3,
        title: 'Entrega rápida',
        text: 'Nossa média de tempo de entrega é de 30 minutos',
    },
    {
        id: 4,
        title: 'Atendimento de qualidade',
        text: 'Atendimento de excelência com uso de chatbots',
    },
]

export default function Info() {
    return (
        <Box p={4} mt="50">
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>A melhor lanchonete</Heading>
            </Stack>

            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600}>{feature.title}</Text>
                                <Text color={'gray.600'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}