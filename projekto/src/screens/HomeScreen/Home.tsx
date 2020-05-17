import React from 'react';
import {
    StyleSheet, 
    View,
    Text
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
                
                <Avatar source={require('../../assets/avatar.png')}
                />

                <Name>Autor: Wiktor Dukacz</Name>

                <SomeText>
                Niźli Dunaju niepowiedziała kiedym szkody ciemnozieloném Rzekł szedł spokojniejszych Bezładnością skroń.
                Bór izby dnia oczu rogi Nilu niezdradzić angielskiéj tylu złotogłów nowo.
                Marszałkowską alkowy Przysiągłbyś Wojski sprawa blachy dowoli ciemnozieloném Dojeżdżaczowi niepowiedziała twarze.
                Trąby młody pomrok gazety. 
                Byłem ogrodu Przedstawiając sejmik Przysiągłbyś Dojeżdżaczowi Worończańskim wojsku bezprzykładną murach żwawo mylił osobna. 
                Zwrócona Chart Latem Łowczego Szmer więdliny pajęczą wzdychać śmietana Musim koło. 
                </SomeText>

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
    border-color: green;
    border-width: 3px;
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

const SomeText = styled.Text`
    position: absolute;
    font-size: 18px;
    top: 375px;
    text-align: center;
    width: 360px;
    height: 300px;
    border-width: 2px;
    border-color: grey;
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
