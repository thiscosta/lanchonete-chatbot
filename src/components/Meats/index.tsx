import React from 'react';
import {
    Flex,
    SimpleGrid
} from '@chakra-ui/react';
import { Card, Title } from '../Commons'

function Meats() {
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center" flexDirection="column">
            <Title text="Cortes de carne" />
            <SimpleGrid
                mt="10"
                spacing="24px"
                px={{ base: "10", md: "20", lg: "40" }}
                columns={{ sm: 1, md: 2, lg: 3 }}
                alignItems="center"
                justifyContent="center"
            >
                <Card
                    title="Picanha"
                    image="https://centralmeatmkt.com/pub/media/catalog/product/cache/6336ad9756daae562d4530ccadc023ef/p/i/picanha-fatiada.png"
                />
                <Card
                    title="Costela"
                    image="https://www.carapretaoficial.com.br/wp-content/uploads/2020/04/Cortes-Victor-Sem-Fundo-FullHD-Costela-Janela-1.png"
                />
                <Card
                    title="Blend da casa"
                    image="https://w7.pngwing.com/pngs/491/899/png-transparent-hamburger-patty-breakfast-sausage-bread-steak-baked-goods-food-cooking-thumbnail.png"
                    flag="Premium"
                />
            </SimpleGrid>
        </Flex>
    );
}

export default Meats;