import React from 'react';
import {
    Flex,
    SimpleGrid
} from '@chakra-ui/react';
import { Card, Title } from '../Commons'

function Aditionals() {
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center" flexDirection="column">
            <Title text="Adicionais" />
            <SimpleGrid
                mt="10"
                spacing="24px"
                px={{ base: "10", md: "20", lg: "40" }}
                columns={{ sm: 1, md: 2, lg: 3 }}
                alignItems="center"
                justifyContent="center"
            >
                <Card
                    title="Bacon"
                    image="http://pngimg.com/uploads/bacon/bacon_PNG10917.png"
                />
                <Card
                    title="Alface"
                    image="https://images.squarespace-cdn.com/content/v1/5b8edfa12714e508f756f481/1543944726778-3R28J0BST06GRZCOF7UR/alface-crespa-verde-hidropo%CC%82nica.png?format=1000w"
                />
                <Card
                    title="Tomate"
                    image="https://imagensemoldes.com.br/wp-content/uploads/2020/07/Tomate-PNG-1280x720.png"
                />
                <Card
                    title="Cebola"
                    image="https://www.seekpng.com/png/detail/774-7744645_onion-slice-png.png"
                />
                <Card
                    title="Picles"
                    image="https://image.shutterstock.com/image-photo/closeup-sliced-pickles-on-white-260nw-401989216.jpg"
                />
                <Card
                    title="Molho especial"
                    image="https://i.pinimg.com/originals/fe/6c/56/fe6c56414e83829d1b13a91968986d6d.png"
                />
            </SimpleGrid>
        </Flex>
    );
}

export default Aditionals;