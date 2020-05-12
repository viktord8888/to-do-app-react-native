import React, { FC } from 'react';
import { Button, View, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../src/constans/Colors';

const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 50px;
    height: 50px;
    margin: 50px;
`;

interface IHomeProps { }

const Home: FC<IHomeProps> = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <WelcomeText>Home Screen</WelcomeText>
            <CustomImage
                source={require('../../src/assets/logo.png')}
            />
            <Button title="TodoList Screen" onPress={() => {
                navigation.navigate('TodoList');
            }}
            />
            <Button title="Gallery Screen" onPress={() => {
                navigation.navigate('Gallery');
            }}
            />
        </View>
    );
};

export default Home;