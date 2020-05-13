import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Colors from '../../constants/Colors';

interface Props {
    keyVal: any;
    val: any;
    deleteMethod: any;
}

export default class Note extends React.Component<Props> {
    render() {
        return (
            
            <View key={this.props.keyVal} style={styles.note}>

                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>X</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGrey,
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: Colors.green,
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.red,
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: Colors.white,
    }
});
