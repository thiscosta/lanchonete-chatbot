import React from 'react';
import {
    Flex,
    SimpleGrid
} from '@chakra-ui/react';
import { Card, Title } from '../Commons'

function Cheeses() {
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center" flexDirection="column">
            <Title text="Queijos" />
            <SimpleGrid
                mt="10"
                spacing="24px"
                px={{ base: "10", md: "20", lg: "40" }}
                columns={{ sm: 1, md: 2, lg: 3 }}
                alignItems="center"
                justifyContent="center"
            >
                <Card
                    title="Prato"
                    image="https://cdn.shopify.com/s/files/1/0261/3880/4305/products/queijo-prato-aurora-fatiado-200g_1-removebg-preview.png?v=1592314362"
                />
                <Card
                    title="Cheddar"
                    image="https://www.pikpng.com/pngl/b/207-2074925_slice-on-slice-cheese-clipart.png"
                />
                <Card
                    title="Muçarela"
                    image="https://s.cornershopapp.com/product-images/1573046.png?versionId=pfwumsMSYCo4liTRN4Qu56tbjK_0rsHM"
                />
            </SimpleGrid>
        </Flex>
    );
}

export default Cheeses;