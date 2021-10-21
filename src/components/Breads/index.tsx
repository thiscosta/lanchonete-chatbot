import React from 'react';
import {
    Flex,
    SimpleGrid
} from '@chakra-ui/react';
import { Card, Title } from '../Commons'

function Breads() {
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center" flexDirection="column">
            <Title text="Pães" />
            <SimpleGrid
                mt="10"
                spacing="24px"
                px={{ base: "10", md: "20", lg: "40" }}
                columns={{ sm: 1, md: 2, lg: 3 }}
                alignItems="center"
                justifyContent="center"
            >
                <Card
                    title="Australiano"
                    image="https://s.cornershopapp.com/product-images/2702938.png?versionId=YvlIo2ccSW4wbBZqrbphLSnuDTf4DoaY"
                />
                <Card
                    title="Brioche"
                    image="https://riosoftice.com.br/wp-content/uploads/2018/06/Mini_P%C3%A3o_de_Hamb%C3%BArguer_Brioche.png"
                />
                <Card
                    title="Francês"
                    image="https://campinas.demarchi.com.br/images/thumbs/0001233_pao-de-marchi-pao-frances-rustico-60-grs-pct-2-unid_550.png"
                />
            </SimpleGrid>
        </Flex>
    );
}

export default Breads;