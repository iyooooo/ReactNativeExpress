import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

export default class Title extends Component {

    // const {title} = this.props

    render () {
        const {children} = this.props
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Text style={styles.title}> 
                    {children}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 15,
        backgroundColor: 'skyblue',
    },
    title:{
        textAlign: 'center',
        fontSize: 13,
        color: 'white',
    }

})
