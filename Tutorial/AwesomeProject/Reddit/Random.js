import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import {connect} from 'react-redux'

export default class Random extends Component {

    render() {
        
        let styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent:'center', 
                alignItems:'center',
                backgroundColor: 'lightgrey',
            }
        })

        return (
            <View style={styles.container}>
                <Text> This is Reddit Random! </Text>
            </View>
        )
    }
}
