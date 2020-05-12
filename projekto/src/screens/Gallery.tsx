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
    margin: 100px;
    font-size: 16px;
    color: ${Colors.black};
`;


export default class Home extends React.Component{

    render() {
        return (

            <View style={styles.container}>
            
                <View style={styles.header}>
                    <Text style={styles.headerText}>GALLERY</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                </ScrollView>
                
                <WelcomeText>Gallery Screen</WelcomeText>

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
      borderBottomWidth: 10,
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