import React, { FC } from 'react';
import { Button, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../src/constans/Colors';

const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

interface IInfoProps {}

const Gallery = ({navigation}) => {
    return (
        <View>
            <WelcomeText>Gallery Screen</WelcomeText>
        </View>
    );
};

export default Gallery;