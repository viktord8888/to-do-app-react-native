import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    ScrollView
 } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

export default class Home extends React.Component{

    render() {
        return (

            <View style={styles.container}>
            
                <View style={styles.header}>
                    <Text style={styles.headerText}>HOME</Text>
                </View>
                
                <Avatar
                    source={require('../../assets/avatar.png')}
                />

                <Name>Autor: Wiktor Dukacz</Name>

                // TODO: biography

            </View>
        );
    }
};

const Avatar = styled.Image`
    position: absolute;
    top: 100px;
    left: 23px;
    width: 150px;
    height: 150px;
    border: 3px solid green;
    border-radius: 75px;
`;

const Name = styled.Text`
    position: absolute;
    font-size: 20px;
    top: 300px;
    left: 25px;
    width: 200px;
    height: 50px;
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.purple,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 4,
        borderBottomColor: Colors.lightGrey,
    },
    headerText: {
        color: Colors.white,
        fontSize: 18,
        padding: 26,
    },
});
