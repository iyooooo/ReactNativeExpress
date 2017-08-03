import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,   
    TouchableOpacity,     
} from 'react-native';

export default class Footer extends Component {

    remove = () => {
        console.log('Remove completed items')
    }

    render() {

        const {children, removeCompleted} = this.props

        return (
            <TouchableOpacity 
                onPress={removeCompleted}
                style={styles.container}
            >
                <View>
                    <Text
                        style={styles.footer}
                    >
                        {children}
                     </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 15,
        backgroundColor: 'skyblue',
    },
    footer:{
        textAlign: 'center',
        fontSize: 13,
        color: 'red',
    }
})