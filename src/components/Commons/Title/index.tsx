import { Text } from '@chakra-ui/layout';
import React from 'react';

export interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return <Text
        bgColor="#CC9966"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        align="center"
    >
        {text}
    </Text>;
}

export default Title;