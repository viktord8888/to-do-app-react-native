import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    ScrollView
 } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../constans/Colors';

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

export default class Home extends React.Component{

    render() {
        return (

            <View style={styles.container}>
            
                <View style={styles.header}>
                    <Text style={styles.headerText}>HOME</Text>
                </View>
                
                <WelcomeText>Home Screen</WelcomeText>
                    <CustomImage
                    source={require('../../src/assets/logo.png')}
                />

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: Colors.lightBlue,
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