import React, { FC } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Colors from '../constans/Colors';

import Note from '../components/Note';

interface Props {
    keyVal: any;
    key: any;
    val: any;
    deleteMethod: any;
}

interface State {
    noteArray: any,
    noteText: string,
}

export default class TodoList extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: ''
        }
    }

    render() {

        let notes = this.state.noteArray.map((val: any, key: React.ReactText) => {
            return <Note key={key} keyVal={key} val={val}
                    deleteMethod={ ()=> this.deleteNote(key) } />
        });

        return (
            <View style={styles.container}>
            
                <View style={styles.header}>
                    <Text style={styles.headerText}>TODO LIST</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({noteText})}
                        value={this.state.noteText}
                        placeholder='Write here...'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>

            </View>
        );
    }

    addNote() {
        
        if (this.state.noteText) {

            let d = new Date(Date.now());
            this.state.noteArray.push({
                'date': d.getFullYear() +
                "/" + (d.getMonth() + 1) +
                "/" + d.getDay(),
                'note': this.state.noteText
            });

            this.setState( {noteArray: this.state.noteArray} )
            this.setState( {noteText: ''} );
        }
    }

    deleteNote(key: any) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray})
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: Colors.purple,
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
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    textInput: {
      alignSelf: 'stretch',
      color: Colors.white,
      padding: 20,
      backgroundColor: Colors.grey,
      borderTopWidth: 2,
      borderTopColor: Colors.lightGrey,
    },
    addButton: {
      position: 'absolute',
      zIndex: 10,
      right: 10,
      bottom: 77,
      backgroundColor: Colors.green,
      width: 69,
      height: 69,
      borderRadius: 69,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 10,
    },
    addButtonText: {
      color: Colors.grey,
      fontSize: 35,
    },
});
