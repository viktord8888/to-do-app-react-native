import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    ScrollView
 } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../constans/Colors';

const FirstText = styled.Text`
    position: absolute;
    top: 100px;
    right: 0px;
    width: 200px;
    height: 70px;
`;

const FirstImage = styled.Image`
    position: absolute;
    top: 90px;
    left: 0px;
    width: 160px;
    height: 80px;
`;

const SecondText = styled.Text`
    position: absolute;
    top: 230px;
    left: 0px;
    width: 200px;
    height: 85px;
`;

const SecondImage = styled.Image`
    position: absolute;
    top: 252px;
    right: 11px;
    width: 140px;
    height: 47px;
`;

const ThirdText = styled.Text`
    position: absolute;
    top: 375px;
    right: 0px;
    width: 200px;
    height: 72px;
`;

const ThirdImage = styled.Image`
    position: absolute;
    top: 365px;
    left: 0px;
    width: 160px;
    height: 70px;
`;

const FourthText = styled.Text`
    position: absolute;
    bottom: 152px;
    left: 0px;
    width: 200px;
    height: 80px;
`;

const FourthImage = styled.Image`
    position: absolute;
    bottom: 155px;
    right: 7px;
    width: 135px;
    height: 53px;
`;

const FifthText = styled.Text`
    position: absolute;
    bottom: 15px;
    right: 0px;
    width: 200px;
    height: 83px;
`;

const FifthImage = styled.Image`
    position: absolute;
    bottom: 20px;
    left: 0px;
    width: 150px;
    height: 70px;
`;

export default class Home extends React.Component{

    render() {
        return (

            <View style={styles.container}>
            
                <View style={styles.header}>
                    <Text style={styles.headerText}>GALLERY</Text>
                </View>

                <FirstImage
                    source={require('../../src/assets/bugattichiron.png')}
                />
                <FirstText>Bugatti Chiron – supersamochód klasy wyższej produkowany pod francuską marką Bugatti od 2016 roku.</FirstText>
                
                <SecondImage
                    source={require('../../src/assets/ferrarilaferrari.png')}
                />
                <SecondText>Ferrari LaFerrari – supersamochód segmentu F produkowany przez włoską markę Ferrari w latach 2013 – 2018.</SecondText>

                <ThirdImage
                    source={require('../../src/assets/koenigseggagera.png')}
                />
                <ThirdText>Koenigsegg Agera RS – supersamochód zaprojektowany przez szwedzką firmę Koenigsegg.</ThirdText>

                <FourthImage
                    source={require('../../src/assets/lamborghiniaventador.png')}
                />
                <FourthText>Lamborghini Aventador – supersamochód klasy wyższej produkowany pod włoską marką Lamborghini od 2011 roku.</FourthText>

                <FifthImage
                    source={require('../../src/assets/hennesseyvenom.png')}
                />
                <FifthText>Hennessey Venom GT – supersamochód skonstruowany i zaprezentowany w 2010 przez amerykańską markę Hennessey.</FifthText>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: Colors.yellow,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 5,
      borderBottomColor: Colors.lightGrey,
    },
    headerText: {
      color: Colors.black,
      fontSize: 18,
      padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    }
});