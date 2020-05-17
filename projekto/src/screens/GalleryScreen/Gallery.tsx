import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    ScrollView,
 } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

export default class Home extends React.Component{

    render() {
        return (

            <View style={styles.container}>
            
                <View style={styles.header}>
                    <Text style={styles.headerText}>GALLERY</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>

                    <View style={{height: 1075}}>

                        <FirstImage
                            source={require('../../assets/bugattichiron.png')}
                        />
                        <FirstText>Bugatti Chiron – supersamochód klasy wyższej produkowany pod francuską marką Bugatti od 2016 roku.</FirstText>
                        
                        <SecondImage
                            source={require('../../assets/ferrarilaferrari.png')}
                        />
                        <SecondText>Ferrari LaFerrari – supersamochód segmentu F produkowany przez włoską markę Ferrari w latach 2013 – 2018.</SecondText>

                        <ThirdImage
                            source={require('../../assets/koenigseggagera.png')}
                        />
                        <ThirdText>Koenigsegg Agera RS – supersamochód zaprojektowany przez szwedzką firmę Koenigsegg.</ThirdText>

                        <FourthImage
                            source={require('../../assets/lamborghiniaventador.png')}
                        />
                        <FourthText>Lamborghini Aventador – supersamochód klasy wyższej produkowany pod włoską marką Lamborghini od 2011 roku.</FourthText>

                        <FifthImage
                            source={require('../../assets/hennesseyvenom.png')}
                        />
                        <FifthText>Hennessey Venom GT – supersamochód skonstruowany i zaprezentowany w 2010 przez amerykańską markę Hennessey.</FifthText>

                        <SixthImage
                            source={require('../../assets/ssctautara.png')}
                        />
                        <SixthText>SSC Tuatara – supersamochód, którego produkcja planowana jest przez Shelby SuperCars.</SixthText>

                        <SeventhImage
                            source={require('../../assets/mclarenp1.png')}
                        />
                        <SeventhText>McLaren P1 – supersamochód segmentu F produkowany przez brytyjską markę McLaren w latach 2013 – 2015.</SeventhText>

                        <EightImage
                            source={require('../../assets/paganihuayra.png')}
                        />
                        <EightText>Pagani Huayra – supersamochód produkowany przez włoską markę Pagani Automobili od roku 2011. Auto jest następcą modelu Zonda. Został zaprezentowany podczas salonu motoryzacyjnego w Genewie w 2011 roku.</EightText>

                    </View>
                    
                </ScrollView>
                
            </View>
        );
    }
};


const FirstText = styled.Text`
    position: absolute;
    top: 10px;
    right: 0px;
    width: 200px;
    height: 70px;
`;

const FirstImage = styled.Image`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 160px;
    height: 80px;
`;

const SecondText = styled.Text`
    position: absolute;
    top: 140px;
    left: 5px;
    width: 200px;
    height: 85px;
`;

const SecondImage = styled.Image`
    position: absolute;
    top: 160px;
    right: 11px;
    width: 140px;
    height: 47px;
`;

const ThirdText = styled.Text`
    position: absolute;
    top: 280px;
    right: 0px;
    width: 200px;
    height: 72px;
`;

const ThirdImage = styled.Image`
    position: absolute;
    top: 275px;
    left: 0px;
    width: 160px;
    height: 70px;
`;

const FourthText = styled.Text`
    position: absolute;
    top: 410px;
    left: 5px;
    width: 200px;
    height: 80px;
`;

const FourthImage = styled.Image`
    position: absolute;
    top: 430px;
    right: 7px;
    width: 135px;
    height: 53px;
`;

const FifthText = styled.Text`
    position: absolute;
    top: 550px;
    right: 5px;
    width: 200px;
    height: 83px;
`;

const FifthImage = styled.Image`
    position: absolute;
    top: 560px;
    left: 0px;
    width: 150px;
    height: 70px;
`;

const SixthText = styled.Text`
    position: absolute;
    top: 710px;
    left: 5px;
    width: 200px;
    height: 83px;
`;

const SixthImage = styled.Image`
    position: absolute;
    top: 710px;
    right: 10px;
    width: 130px;
    height: 55px;
`;

const SeventhText = styled.Text`
    position: absolute;
    top: 840px;
    right: 0px;
    width: 200px;
    height: 83px;
`;

const SeventhImage = styled.Image`
    position: absolute;
    top: 835px;
    left: 0px;
    width: 145px;
    height: 72px;
`;

const EightText = styled.Text`
    position: absolute;
    top: 975px;
    left: 5px;
    width: 200px;
    height: 83px;
`;

const EightImage = styled.Image`
    position: absolute;
    top: 995px;
    right: 10px;
    width: 130px;
    height: 65px;
`;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      backgroundColor: Colors.orange,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 4,
      borderBottomColor: Colors.lightGrey,
    },
    headerText: {
      color: Colors.white,
      fontSize: 18,
      padding: 26
    },
    scrollContainer: {
        flex: 1
    }
});